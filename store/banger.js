import { createClient } from '../plugins/contentful';
const contentfulClient = createClient();
export const state = () => ({
    currentBanger: {},
    isLoading: true
})

export const mutations = {
    setCurrentBanger(state, payload) {
        state.currentBanger = payload
    },
    setLoading(state, payload) {
        state.isLoading = payload
    }
}

export const actions = {
    async getBangerBySlug({ commit }, slug) {
        commit('setLoading', true);
        const response = await contentfulClient.getEntries({
            content_type: 'bangerPost',
            'fields.urlSlug': slug
        })
        commit('setCurrentBanger', response.items[0])
        commit('setLoading', false)
    }
}
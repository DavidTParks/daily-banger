import { createClient } from '../plugins/contentful'
const contentfulClient = createClient();
export const state = () => ({
    bangers: []
})

export const mutations = {
    setBangers(state, payload) {

        state.bangers = payload.sort((a,b) => {
            return new Date(b.fields.date) - new Date(a.fields.date);
        });
    }
}


export const actions = {
    async getBangers({ commit }) {
        const response = await contentfulClient.getEntries({
            content_type: 'bangerPost',
        })
        if (response.items.length > 0) {
            commit('setBangers', response.items);
        }
    }
}
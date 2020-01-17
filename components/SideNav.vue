<template>
<div>
    <div :class="[navDrawerOpened ? 'openDrawer' : 'close']" class="navDrawer fixed shadow-lg min-h-screen w-64 z-50 bg-gray-900 flex flex-col">
        <CloseIcon @click="toggleNavDrawer" class="w-12 h-12 text-white fill-current ml-auto cursor-pointer hover:text-gray-400 m-2"/>
        <div class="mt-24 flex flex-col w-full h-full justify-center items-center">
            <nuxt-link class="w-full flex items-center py-4 hover:bg-gray-800" to="/"><IconHome class="ml-8 w-auto h-8 text-white fill-current"/><span class="-mb-1 ml-2 text-xl text-white">Home</span></nuxt-link>
            <nuxt-link class="w-full flex items-center py-4 hover:bg-gray-800" to="/about"><IconLaunch class="ml-8 w-auto h-10 launch"/><span class="-mb-1 ml-2 w-full text-xl text-white">About</span></nuxt-link>
        </div>
        <div class="flex ml-8 h-full mt-auto mb-8 flex-end">
            <a class="mr-2" href="https://www.instagram.com/thedailybanger_/" target="_blank">
                <i class="fab fa-instagram instagram-logo fa-2x text-white fill-current"></i>
            </a>
            <a class="ml-2" href="https://twitter.com/thedailybanger2" target="_blank">
                <i class="fab fa-twitter instagram-logo fa-2x text-white fill-current"></i>
            </a>
        </div>
    </div>
    <div @click="toggleNavDrawer" v-show="navDrawerOpened" class="min-w-screen min-h-screen bg-black opacity-75 z-40 absolute top-0 bottom-0 right-0 left-0 overflow-hidden"></div>
</div>
</template>

<script>
import CloseIcon from "~/assets/svg/icon-close.svg";
import IconHome from "~/assets/svg/icon-home.svg";
import IconLaunch from "~/assets/svg/icon-information.svg";
export default {
    name: "side-nav",
    components: {
        CloseIcon,
        IconHome,
        IconLaunch
    },
    methods: {
        toggleNavDrawer() {
            this.$store.commit('toggleNavDrawer');
        }
    },
    computed: {
        navDrawerOpened() {
            return this.$store.state.navDrawerOpened;
        },
    }
}
</script>

<style scoped lang="scss">
.navDrawer {
  transition: all 0.3s ease-in-out;
}

.openDrawer {
    transform: translateX(0);
}

.close {
    transform: translateX(-16rem);
}

.launch {
    .primary {
        fill: white;
    }

    .secondary {
    }
}

/* .main {
  position: relative;
  min-height: 100vh;
  
} */
</style>

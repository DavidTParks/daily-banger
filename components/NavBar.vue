<template>
  <nav class="bg-purple-900">
    <ul class="flex justify-between items-center px-4">
      <!-- <li class="navbar-item"><LaunchIcon class="logo"/>Discover</li> -->
      <!-- <li class="navbar-item first"></li> -->
      <li>
        <IconMenu @click="openNavDrawer" class="w-8 h-8 text-white fill-current cursor-pointer hover:text-gray-400"/>
      </li>
      <li>
         <nuxt-link class="flex items-center" :to="'/'">
          <picture class="w-16 lg:w-20 h-auto">
            <source srcset="../assets/logo/400dpiLogoCropped.webp" type="image/webp">
            <img class="logo" src="~/assets/logo/400dpiLogoCropped.png" alt="Alt Text!">
          </picture>
          <h1 class="text-white lg:text-3xl uppercase font-bold hidden sm:flex">The Daily Banger</h1>
         </nuxt-link>
        <!-- <img class="logo" src="~/assets/logo/400dpiLogoCropped.webp"/> -->
        <!-- <DailyBangerLogo class="logo"/> -->
      </li>
      <li>
        
      </li>
    </ul>
  </nav>
</template>

<script>
import LaunchIcon from "~/assets/svg/icon-launch.svg";
import DailyBangerLogo from "~/assets/svg/SVGLogo.svg";
import IconMenu from "~/assets/svg/icon-menu.svg";
import SkullGuy from "~/assets/svg/SVGLogo.svg";
export default {
  name: "nav-bar",
  components: {
    LaunchIcon,
    DailyBangerLogo,
    IconMenu,
    SkullGuy
  },
  mounted: function() {
    console.log("Mounted");
  },
  methods: {
    openNavDrawer: function() {
      console.log("Opening nav drawer");
      this.$store.commit('toggleNavDrawer');
      this.$emit('open-nav-drawer');
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
// .navbar {
//   // background: $primary;
//   max-height: 60px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

//   .logo {
//     width: auto;
//     height: 60px;
//     object-fit: contain;
//   }

//   .navbar-items {
//     display: flex;
//     flex-direction: row;
//     list-style: none;
//     align-items: center;
//     // justify-content: space-between;
//     width: 100%;
//     padding-left: 0 !important;

//     .navbar-links {
//       display: flex;
//       justify-content: flex-end;
//     }

//     .site-title {
//       font-size: 30px;
//       font-weight: 900;
//       white-space: nowrap;
//       overflow: hidden;
//       text-transform: uppercase;
//       font-family: 'Raleway', sans-serif;
//       font-weight: 200;
//     }

//     &:first-child {
//       // margin-left: 15px;
//     }

//     .navbar-item {
//       font-size: 20px;
//       font-weight: 600;
//       color: white;
//       flex: 1;
//       cursor: pointer;
//       display: flex;
//       align-items: center;

//       .daily-banger-title {
//         margin-left: -100px;
//         font-size: 32px;

//       }

//       &.links {
//         justify-content: flex-end;

//         a {
//           margin-right: 30px;
//           font-size: 16px;
//         }

//         .signup-button {
//           display: none;
//           font-size: 14px;
//           padding: 10px;
//           background: $primary-darkest;
//           border-radius: $border-radius;
//           box-shadow: $button-box-shadow;
//         }
//       }

//       &.logo {
//         justify-content: center;
//         cursor: unset;

//         a {
//           color: white;
//           text-decoration: none;
//           display: flex;
//           align-items: center;
//           cursor: pointer;
//         }
//       }

//       &:hover {
//         .logo {
//           g {
//             :first-child {
//               fill: $primary;
//             }

//             :last-child {
//               fill: $primary;
//             }
//           }
//         }
//       }
//     }

//     .hamburger-menu {
//       height: 30px;
//       display: none;
//       width: 30px;
//       float: right;
//       fill: white;
//       cursor: pointer;

//       svg {
//         width: 30px;
//         margin-left: auto;
//         margin-right: 15px;
//       }
//     }
//   }

// }
// @media(max-width: 650px) {
//   .navbar {
//     .navbar-items {
//       .first {
//         display: none !important;
//       }
//     }
//   }
// }


// @media only screen 
//     and (device-width : 414px) 
//     and (device-height : 736px)  { 

//       .navbar {
//         max-height: 60px !important;

//         .logo {
//           height: 60px !important;

//         }

//         .site-title {
//           font-size: 26px !important;
//         }
//       }
// }

// @media(max-width: 555px) {
//   .hamburger-menu {
//     display: flex !important;
//     svg {
//       margin-left: auto;
//     }
//   }
// }

// @media(max-width: 375px) {
//   .hamburger-menu {
//     display: none !important;
//   }

//   .navbar {
//     height: 50px !important;
//   }

//   .logo {
//     height: 50px !important;
//   }

//   .links {
//     display: none !important;
//   }

//   .site-title {
//     font-size: 24px !important;
//   }
// }
</style>

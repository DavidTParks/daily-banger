<template>
  <nav class="navbar">
    <ul class="navbar-items">
      <!-- <li class="navbar-item"><LaunchIcon class="logo"/>Discover</li> -->
      <li class="navbar-item first"></li>
      <li class="navbar-item logo">
        <picture>
          <source srcset="../assets/logo/400dpiLogoCropped.webp" type="image/webp">
          <img class="logo" src="~/assets/logo/400dpiLogoCropped.png" alt="Alt Text!">
        </picture>
        <!-- <img class="logo" src="~/assets/logo/400dpiLogoCropped.webp"/> -->
        <span class="site-title">The Daily Banger</span>
        <!-- <DailyBangerLogo class="logo"/> -->
      </li>
      <li class="navbar-item hamburger-menu" @click="openNavDrawer">
        <!-- <a class="signup">Sign Up</a> -->
        <IconMenu/>
      </li>
      <li class="navbar-item links">
        <!-- <a class="login-button">Login</a> -->
        <a class="signup-button">Sign up</a>
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
      this.$emit('open-nav-drawer');
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.navbar {
  background: $primary;
  max-height: 80px;
  position: relative;
  display: flex;
  align-items: center;
  // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  .logo {
    width: auto;
    height: 80px;
    object-fit: contain;
  }

  .navbar-items {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    // justify-content: space-between;
    width: 100%;
    padding-left: 0 !important;

    .navbar-links {
      display: flex;
      justify-content: flex-end;
    }

    .site-title {
      font-size: 36px;
      font-weight: 900;
      white-space: nowrap;
      overflow: hidden;
    }

    &:first-child {
      // margin-left: 15px;
    }

    .navbar-item {
      font-size: 20px;
      font-weight: 600;
      color: white;
      flex: 1;
      cursor: pointer;
      display: flex;
      align-items: center;

      .daily-banger-title {
        margin-left: -100px;
        font-size: 32px;

      }

      &.links {
        justify-content: flex-end;

        a {
          margin-right: 30px;
          font-size: 16px;
        }

        .signup-button {
          font-size: 14px;
          padding: 10px;
          background: $primary-darkest;
          border-radius: $border-radius;
          box-shadow: $button-box-shadow;
        }
      }

      &.logo {
        justify-content: center;
      }

      &:hover {
        .logo {
          g {
            :first-child {
              fill: $primary;
            }

            :last-child {
              fill: $primary;
            }
          }
        }
      }
    }

    .hamburger-menu {
      height: 30px;
      display: none;
      width: 30px;
      float: right;
      fill: white;
      cursor: pointer;

      svg {
        width: 30px;
        margin-left: auto;
        margin-right: 15px;
      }
    }
  }

}
@media(max-width: 650px) {
  .navbar {
    .navbar-items {
      .first {
        display: none !important;
      }
    }
  }
}


@media only screen 
    and (device-width : 414px) 
    and (device-height : 736px)  { 

      .navbar {
        max-height: 60px !important;

        .logo {
          height: 60px !important;

        }

        .site-title {
          font-size: 26px !important;
        }
      }
}
</style>

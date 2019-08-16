<template>
  <div class="navbar">
    <ul class="navbar-items">
      <!-- <li class="navbar-item"><LaunchIcon class="logo"/>Discover</li> -->
      <li class="navbar-item"></li>
      <li class="navbar-item logo">
        <img class="logo" src="~/assets/logo/400dpiLogoCropped.png"/><span class="site-title">The Daily Banger</span>
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
  </div>
</template>

<script>
import LaunchIcon from "~/assets/svg/icon-launch.svg";
import DailyBangerLogo from "~/assets/svg/SVGLogo.svg";
import IconMenu from "~/assets/svg/icon-menu.svg";
export default {
  name: "nav-bar",
  components: {
    LaunchIcon,
    DailyBangerLogo,
    IconMenu
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
  width: 100vw;
  background: $primary;
  max-height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  .logo {
    width: auto;
    height: 60px;
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
      font-size: 26px;
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
</style>

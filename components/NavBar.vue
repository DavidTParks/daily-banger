<template>
  <div class="navbar">
    <ul class="navbar-items">
      <!-- <li class="navbar-item"><LaunchIcon class="logo"/>Discover</li> -->
      <li class="navbar-item"></li>
      <li class="navbar-item">
        <LightningBolt class="logo"/>The Daily Banger
      </li>
      <li class="hamburger-menu">
        <IconMenu/>
      </li>
    </ul>
  </div>
</template>

<script>
import LaunchIcon from "~/assets/svg/icon-launch.svg";
import LightningBolt from "~/assets/svg/lightning.svg";
import IconMenu from "~/assets/svg/icon-menu.svg";
export default {
  name: "nav-bar",
  components: {
    LaunchIcon,
    LightningBolt,
    IconMenu
  },
  mounted: function() {
    console.log("Mounted");
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.navbar {
  width: 100vw;
  background: $primary-dark;
  max-height: 80px;
  position: sticky;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);

  .logo {
    height: 40px;
    width: 40px;
    margin-right: 5px;

    g {
      :first-child {
        fill: $secondary-dark;
      }

      :last-child {
        fill: $secondary-100;
      }
    }
  }

  .navbar-items {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-left: 0 !important;

    &:first-child {
      margin-left: 15px;
    }

    .navbar-item {
      font-size: $header-font-size;
      font-weight: 600;
      color: white;
      // text-transform: uppercase;
      cursor: pointer;
      display: flex;
      align-items: center;

      &:hover {
        .logo {
          g {
            :first-child {
              fill: $secondary-100;
            }

            :last-child {
              fill: $secondary-dark;
            }
          }
        }
      }
    }

    .hamburger-menu {
      height: 45px;
      width: 45px;
      float: right;
      fill: white;
      padding-right: 15px;
      cursor: pointer;
    }
  }
}
</style>

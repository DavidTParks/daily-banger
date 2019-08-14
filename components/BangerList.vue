<template>
  <div class="banger-list-wrapper">
    <BangerCard
    v-for="(banger, index) in bangers"
    :key="banger.id"
    :banger="banger"
    >
    </BangerCard>
  </div>
</template>

<script>
import BangerCard from "./BangerCard.vue";
export default {
  name: "banger-list",
  components: {
    BangerCard
  },
  props: ["bangers"],
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.banger-list-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;

  :last-child {
    margin-bottom: 100px;
  }
}
</style>

<template>
  <div class="grid-row banger-list-wrapper">
    <template v-for="(banger, index) in bangers">
        <BangerCard
        @play-song="emitUrl"
        :key="banger.id"
        :banger="banger"
        >
        </BangerCard>
    </template>
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
  },
  methods : {
    emitUrl(url) {
      this.$emit('play-song', url);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";

.banger-list-wrapper {
  margin-top: 10px;
}
</style>

<template>
    <div class="footer">
        <p class="site-footer">© The Daily Banger</p>
    </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="scss">
@import "~/assets/sass/variables.scss";
.footer {
    width: 100vw;
    position: fixed;
    bottom: 0;
    min-height: 70px;
    background: $gray-100;
    display: flex;
    justify-content: center;
    align-items: center;

    .site-footer {
        color: white;
    }
}
</style>
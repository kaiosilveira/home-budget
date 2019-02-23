<template>
  <div>
    <navbar-vue></navbar-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarVue from './components/shared/navbar/Navbar.vue'
export default {
  components: {
    NavbarVue
  }
}
</script>

<style lang="scss">
  body {
    font-family: 'Comfortaa', cursive;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

</style>


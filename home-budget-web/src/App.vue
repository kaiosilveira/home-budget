<template>
  <div>
    <navbar-vue></navbar-vue>
    <router-view></router-view>
  </div>
</template>

<script>

import NavbarVue from './components/shared/navbar/Navbar.vue'
import { FETCH_PERIODS } from './store/actions';

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

  .card {
    padding: 1em;
    margin: 1em .5em;
    font-size: 18px;
    border: 1px solid #eee;
    box-shadow: 4px 16px 16px #eee;
  }

</style>


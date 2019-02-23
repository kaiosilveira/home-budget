<template>
  <div>
    <router-view></router-view>
    <hb-dock></hb-dock>
  </div>
</template>

<script>

import Dock from './components/dock/Dock.vue'

export default {
  components: {
    'hb-dock': Dock
  }
}
</script>

<style lang="scss" scoped>

</style>


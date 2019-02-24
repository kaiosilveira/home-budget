<template>

  <div id="app">

    <h1 class="title">{{selectedPeriod.name}}</h1>
    <div class="card" v-for="group of groups" :key="group._id" @click="seeDetailsOf(group)">
      <span>{{group.name}}</span> <span>{{getGroupBudget(group)}}</span>
    </div>
  </div>
</template>

<script>

import { mapstate } from 'vuex'
import { FETCH_CATEGORIES, FETCH_GROUPS, FETCH_PERIODS } from '../../../store/actions'

export default {
  
  created() {
    this.$store.dispatch(FETCH_PERIODS)
    .then(() => this.$store.dispatch(FETCH_GROUPS, this.$store.state.selectedPeriod._id))
    .then(() => this.$store.dispatch(FETCH_CATEGORIES))
    .then(() => console.log(this.$store.state.groups))
  },

  computed: {
    selectedPeriod () {
      return this.$store.state.selectedPeriod
    },
    groups () {
      return this.$store.state.groups
    },
  },

  methods: {
    getGroupBudget(group) {
      return group.categories && group.categories.map(c => c.budget).reduce((sum, item) => sum += item)
    },
    seeDetailsOf(group) {
      this.$store.commit('changeSelectedGroup', group)
      this.$router.push(`/groups/${group._id}`)
    },
  }
}
</script>

<style lang="scss">  

  * {
    font-family: sans-serif;
  }

  .title {
    font-size: 20px;
    text-align: center;
  }

</style>

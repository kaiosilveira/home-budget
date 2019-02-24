<template>
    <div>
        <p>{{selectedGroup.name}}</p>
        <div class="card" v-for="category in selectedGroup.categories" :key="category._id">
            <span>{{category.name}}</span> <span>{{category.budget}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { FETCH_SELECTED_GROUP, FETCH_CATEGORIES_BY_GROUP_ID } from '../../../store/actions'

export default {

    created() {
        if (this.$store.state.selectedGroup
         && this.$store.state.selectedGroup._id) {
            return;
        }

        this.$store
        .dispatch(FETCH_SELECTED_GROUP, this.$route.params.id)
        .then(() => this.$store
            .dispatch(FETCH_CATEGORIES_BY_GROUP_ID, this.$store.state.selectedGroup._id)
        )
        .then(() => console.log(this.$store.state.selectedGroup))
    },

    computed: {
        selectedGroup() {
            return this.$store.state.selectedGroup
        }
    }
}
</script>



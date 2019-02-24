<template>
    <div>
        <p>{{selectedGroup.name}}</p>
        <div class="card" v-for="category in categories" :key="category._id" @click="seeDetailsOf(category)">
            <span>{{category.name}}</span> <span>{{category.budget}}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>

import { FETCH_SELECTED_GROUP, FETCH_CATEGORIES_BY_GROUP_ID } from '../../../store/actions'
import { mapState } from 'vuex';

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
    },

    computed: {
        ...mapState(['selectedGroup', 'categories'])
    },

    methods: {
        seeDetailsOf(category) {
            this.$store.commit('changeSelectedCategory', category)
            this.$router.push(`/categories/${category._id}`)
        }
    }
}
</script>



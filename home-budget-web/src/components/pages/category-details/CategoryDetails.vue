<template>
    <section class="category-details">
        <h1 class="category-title">{{category.name}}</h1>

        <div v-if="items && items.length">
            <div class="card" v-for="item of items" :key="item._id">
                <span>{{item.name}}</span> <span>{{item.value}}</span>
            </div>
        </div>
        <p class="empty-list-text" v-if="!items || !items.length">Nenhum lançamento feito nessa categoria até o momento ;)</p>
    </section>
</template>

<script>

import { mapState } from 'vuex'
import { FETCH_CATEGORY, FETCH_ITEMS } from '../../../store/actions.js'

export default {
    created() {
        this.$store.dispatch(FETCH_CATEGORY, this.$route.params.id)
        .then(() => this.$store.dispatch(FETCH_ITEMS, this.category._id))
        .then(() => console.log(this.$store.state.items))
    },

    computed: {
        ...mapState({
            category: state => state.selectedCategory,
            items: state => state.items
        })
    }
}
</script>

<style lang="sass" scoped>

    *
        font-family: sans-serif

    .category-title
        text-align: center

    .category-details
        margin: 1em

    .empty-list-text
        text-align: center
</style>



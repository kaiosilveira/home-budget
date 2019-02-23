<template>
    <section class="category-details">
        <h1 class="category-title">{{category.name}}</h1>

        <div v-if="categoryHasItens">tem coisa</div>
        <p class="empty-list-text" v-if="!categoryHasItens">Nenhum lançamento feito nessa categoria até o momento ;)</p>
    </section>
</template>

<script>

import { FETCH_CATEGORY } from '../../store/actions.js'

export default {
    created() {
        this.$store.dispatch(FETCH_CATEGORY, this.$route.params.id )
    },

    computed: {
        category() {
            return this.$store.state.selectedCategory
        },
        categoryHasItens () {
            return this.category.items && this.category.items.length
        }
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



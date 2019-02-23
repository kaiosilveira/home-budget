<template>
    <div>
        <h1 class="form-title">Adicionar despesa</h1>

        <form @submit.prevent="saveItem">
            <input type="text" v-model="item.name" placeholder="Descrição">
            <input type="number" v-model="item.value" placeholder="Valor">
            <button>Adicionar</button>
        </form>
    </div>
</template>

<style lang="sass" scoped>

</style>

<script>

import { ADD_CATEGORY_ITEM } from '../../store/actions'

export default {
    
    data() {
        return {
            item: {
                name: '',
                value: 0
            }
        }
    },

    methods: {
        saveItem() {
            const categoryId = this.$route.params.id
            this.$store.dispatch(ADD_CATEGORY_ITEM, { item: this.item, categoryId })
        }
    }
}
</script>


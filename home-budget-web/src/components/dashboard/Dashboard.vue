<template>

  <div id="app">

    <h1 class="title">Fevereiro de 2019 (18 Jan à 17 Fev)</h1>
    <div class="page-content">

      <div class="totalizers">
        <div class="mini-card paper" style="color: #2870e2;">
          <span style="font-weight: bold">R$8000</span>
          <span>orçado</span>
        </div>
        <div class="mini-card paper" style="color: #f4402c;">
          <span style="font-weight: bold">R$3000</span>
          <span>consumido</span>
        </div>
        <div class="mini-card paper" style="color: #47cc4e">
          <span style="font-weight: bold">R$3000</span>
          <span>disponível</span>
        </div>
      </div>

      <hb-card
        upper-text="faltam"
        highlight-text="13"
        bottom-text="dias para acabar o período"
      ></hb-card>

        <hb-card
          v-for="category of categories"
          :key="category.id"
          upper-text="Restam"
          :highlight-text="'R$' + getAvailableAmountFrom(category)"
          :bottom-text="getAvaliableBudgetText(category.name)"
          :paper-background-color="category.backgroundColor"
          :paper-color="category.color"
          @clicked="seeDetailsOf(category._id)"
        >
      </hb-card>

      <button class="fab">+</button>
    </div>
  </div>
</template>

<script>

import Card from '../shared/card/Card.vue'
import { FETCH_CATEGORIES } from '../../store/actions'

export default {

  created() {
    this.$store.dispatch(FETCH_CATEGORIES)
  },

  components: {
    'hb-card': Card
  },

  computed: {
    categories () {
      return this.$store.state.categories
    }
  },

  methods: {
    
    getAvaliableBudgetText(name) {
      return `para ${name}`;
    },

    getAvailableAmountFrom(category) {
      return parseFloat(category.budget - category.items.map(i => i.value).reduce((t, i) => t += i, 0)).toFixed(2);
    },

    seeDetailsOf(categoryId) {
      this.$router.push(`/category/${categoryId}`)
    }

  }

}
</script>

<style lang="scss">  

  * {
    font-family: sans-serif;
  }

  .fab {
    position: fixed;
    background-color: #e7732f;
    font-size: 28px;
    border-radius: 100%;
    border: 0;
    font-weight: bold;
    z-index: 2;
    bottom: 12vh;
    box-sizing: border-box;
    width: 60px;
    height: 60px;
    right: 5vw;
    color: #fff;
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
  }

  .title {
    font-size: 20px;
    text-align: center;
  }

  %white-paper {
    border: 1px solid #eee;
    box-shadow: 4px 8px 8px #eee;
  }

  .paper {
    @extend %white-paper;
  }
  
  .page-content {
    position: relative;
    margin-bottom: 12vh;
  }

  .totalizers {
    display: flex;
    margin: 1em;
    justify-content: space-between;

    .mini-card {
      display: flex;
      flex-direction: column;
      padding: 1em;
      justify-content: center;
      text-align: center;
    }
  }
</style>

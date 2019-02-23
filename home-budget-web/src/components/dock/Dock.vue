<template>
    <div class="dock">
      <div class="item-list">
        <div class="dock-item active" @click="navigateTo('/')">
          <span class="icon-wrapper"><font-awesome-icon icon="chart-line" /></span>
          <span>Dashboard</span>
        </div>
        <div class="dock-item">
          <span class="icon-wrapper"><font-awesome-icon icon="search-plus" /></span>
          <span>Detalhes</span>
        </div>
        <div class="dock-item">
          <span class="icon-wrapper"><font-awesome-icon icon="calendar-alt" /></span>
          <span>Período</span>
        </div>
        <div class="dock-item" @click="navigateTo('groups')">
          <span class="icon-wrapper"><font-awesome-icon icon="layer-group" /></span>
          <span>Grupos</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
      methods: {
        navigateTo(path) {
          this.$router.push(path)
        }
      }
  }
</script>

<style lang="scss" scoped>
    .dock {
        font-family: sans-serif;
        height: 10vh;
        box-sizing: border-box;
        width: 100%;
        bottom: 0;
        background-color: #fff;
        color: #e7732f;
        position: fixed;
        padding-bottom: 1em;

        .item-list {
        display: flex;
        justify-content: space-around;
        font-size: 16px;
        text-align: center;

            .dock-item {
                    width: 25%;
                    padding: 1em;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .icon-wrapper {
                    font-size: 24px;
                    margin-bottom: .2em;
                    }

                    &.active {
                    background-color: #e7732f;
                    color: #fff;
                }
            }
        }
  }
</style>
<template>
    <div class="card paper" :style="{ backgroundColor: paperBackgroundColor || '#fff', color: paperColor || '#000' }" @click="clicked">
      <span class="upper-text">{{ upperText }}</span>
      <span class="main-info">{{ highlightText }}</span>
      <span class="bottom-text">{{ bottomText }}</span>
    </div>
</template>

<script>
export default {
    props: ['upperText', 'highlightText', 'bottomText', 'paperColor', 'paperBackgroundColor'],
    methods: {
        clicked() {
            this.$emit('clicked')
        }
    }
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        margin: 1em;
        padding: 1em;
        justify-content: center;
        align-content: center;
        text-align: center;

        .main-info {
        font-size: 72px;
        }
    }
</style>



<template>
    <div class="body">
        <div class="group" v-for="group of groups" :key="group.id">
            <h2>{{ group.name }}</h2>
            <div class="categories-wrapper" v-for="category of group.categories" :key="category.id">
                <div class="category-box">
                    <div class="category-box-inner">
                        <span class="category-title">{{ category.name }}</span>
                        <span class="budget-info">
                            R${{ getAvaliableAmountOf(category) }} restante de R${{ category.budget }}
                        </span>
                    </div>
                    <div class="spent-percentage">
                        <div class="progress-bar" :style="{ width: getPercentageOf(category) + `%`, backgroundColor: category.backgroundColor }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                groups: []
            }
        },

        created() {
            this.$http.get('http://localhost:3000/v1/groups')
            .then(res => res.json())
            .then(groups => this.groups = groups);
        },

        methods: {
            getPercentageOf(category) {
                const totalInSpents = category.items.map(i => i.value).reduce((t, i) => t += i);
                return totalInSpents / category.budget * 100;
            },

            getAvaliableAmountOf(category) {
                const totalInSpents = category.items.map(i => i.value).reduce((t, i) => t += i);
                return parseFloat(category.budget - totalInSpents).toFixed(2);
            }
        }
    }

</script>

<style lang="scss" scoped>

    .body {
        padding: 1em;
        font-family: sans-serif;
    }

    .categories-wrapper {
        display: flex;
        flex-direction: column;

        .category-box {

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            border-radius: 5px;
            margin: 1em 0;

            .category-box-inner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;

                .category-box-content {
                    z-index: 1;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }

            .spent-percentage {
                height: 1em;
                background-color: #eee;
                border: 1px solid #ddd;

                .progress-bar {
                    height: 1em;
                }
            }
        }
    }

</style>
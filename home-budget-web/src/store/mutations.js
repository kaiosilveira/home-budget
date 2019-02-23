const mutations = {
    receiveCategories: (state, categories) => state.categories = [...categories],
    fetchSelectedCategory: (state, category) => state.selectedCategory = { ...category }
}

export default mutations
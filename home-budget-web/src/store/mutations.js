const mutations = {

    receivePeriods: (state, periods) => {
        state.periods = [...periods]
        state.selectedPeriod = { ...periods[periods.length - 1] }
    },

    changeSelectedGroup: (state, group) => state.selectedGroup = { ...group },
    
    receiveGroups: (state, groups) => state.groups = [...groups],
    
    receiveCategories: (state, categories) => state.categories = [...categories],
    
    fetchSelectedCategory: (state, category) => state.selectedCategory = { ...category },
    
    fetchSelectedGroup: (state, group) => state.selectedGroup = { ...group },

    changeSelectedCategory: (state, category) => state.selectedCategory = { ...category },

    fetchItems: (state, items) => state.items = [...items]
}

export default mutations
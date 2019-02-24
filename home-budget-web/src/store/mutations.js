export const CHANGE_SELECTED_GROUP = 'changeSelectedGroup'

const mutations = {
    receivePeriods: (state, periods) => {
        state.periods = [...periods]
        state.selectedPeriod = { ...periods[periods.length - 1] }
    },
    [CHANGE_SELECTED_GROUP]: (state, group) => state.selectedGroup = { ...group },
    
    receiveGroups: (state, groups) => state.groups = [...groups],
    
    receiveCategories: (state, categories) => {        
        state.groups = state.groups.map(group => {
            group.categories = categories.filter(c => c.group === group._id)
            return group
        })
    },
    
    fetchSelectedCategory: (state, category) => state.selectedCategory = { ...category },
    
    fetchSelectedGroup: (state, group) => state.selectedGroup = { ...group },

    receiveCategoriesForSelectedGroup: (state, categories) => state.selectedGroup.categories = [...categories]
}

export default mutations
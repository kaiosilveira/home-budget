import CategoriesService from '../api/services/CategoriesService'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const ADD_CATEGORY_ITEM = 'ADD_CATEGORY_ITEM'

const actions = {
    [FETCH_CATEGORIES] ({ commit }) {
        return CategoriesService.list()
        .then(categories => commit('receiveCategories', categories))
    },
    [FETCH_CATEGORY] ({ commit }, id) {
        return CategoriesService.getById(id)
        .then(category => commit('fetchSelectedCategory', category))
    },
    [ADD_CATEGORY_ITEM] ({ commit }, { item, categoryId }) {
        const newItem = { ...item, date: new Date(), categoryId }
        return CategoriesService.addItem(newItem, categoryId)
        .then(console.log)
    } 
}

export default actions
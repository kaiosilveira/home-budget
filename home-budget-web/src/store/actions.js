import CategoriesService from '../api/services/CategoriesService'
import PeriodsService from '../api/services/PeriodsService'
import GroupsService from '../api/services/GroupsService'

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES'
export const FETCH_CATEGORY = 'FETCH_CATEGORY'
export const ADD_CATEGORY_ITEM = 'ADD_CATEGORY_ITEM'
export const FETCH_PERIODS = 'FETCH_PERIODS'
export const FETCH_GROUPS = 'FETCH_GROUPS'
export const FETCH_SELECTED_GROUP = 'FETCH_SELECTED_GROUP'
export const FETCH_CATEGORIES_BY_GROUP_ID = 'FETCH_CATEGORIES_BY_GROUP_ID'

const actions = {
    [FETCH_PERIODS] ({ commit }) {
        return PeriodsService
        .list()
        .then(periods => commit('receivePeriods', periods))
    },

    [FETCH_GROUPS] ({ commit }, periodId) {
        return GroupsService
        .list(periodId)
        .then(groups => commit('receiveGroups', groups))
    },

    [FETCH_CATEGORIES] ({ commit }) {
        return CategoriesService
        .list()
        .then(categories => commit('receiveCategories', categories))
    },

    [FETCH_CATEGORIES_BY_GROUP_ID] ({ commit }, groupId) {
        return CategoriesService
        .getByGroupId(groupId)
        .then(categories => commit('receiveCategoriesForSelectedGroup', categories))
    },

    [FETCH_CATEGORY] ({ commit }, id) {
        return CategoriesService
        .getById(id)
        .then(category => commit('fetchSelectedCategory', category))
    },

    [ADD_CATEGORY_ITEM] ({ commit }, { item, categoryId }) {
        const newItem = { ...item, date: new Date(), categoryId }
        return CategoriesService.addItem(newItem, categoryId)
        .then(console.log)
    },

    [FETCH_SELECTED_GROUP] ({ commit }, groupId) {
        return GroupsService.get(groupId).then(res => res.json()).then(group => commit('fetchSelectedGroup', group))
    }
}

export default actions
import API_URL from '../API_URL'

const CategoriesService = {
    
    list: () => fetch(`${API_URL}/categories`).then(res => res.json()),
    
    getById: id => fetch(`${API_URL}/categories/${id}`).then(res => res.json()),

    addItem: (item, categoryId) => {
        return fetch(`${API_URL}/categories/${categoryId}/items/`, {
            method: 'POST',
            body: JSON.stringify(item)
        })
        .then(res => res.json())
    },
    
    getByGroupId: groupId => {
        return fetch(`${API_URL}/groups/${groupId}/categories`)
        .then(res => res.json())
    }
}

export default CategoriesService
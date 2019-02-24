import API_URL from '../API_URL'

const ItemsService = {
    listByCategoryId: id => fetch(`${API_URL}/categories/${id}/items`).then(res => res.json())
}

export default ItemsService
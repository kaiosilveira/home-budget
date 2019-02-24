import API_URL from '../API_URL'

const PeriodsService = {
    list: () => fetch(`${API_URL}/periods`).then(res => res.json())
}

export default PeriodsService
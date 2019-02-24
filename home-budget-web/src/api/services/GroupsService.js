import API_URL from '../API_URL'

const GroupsService = {
    list: periodId => fetch(`${API_URL}/periods/${periodId}/groups`).then(res => res.json()),
    get: groupId => fetch(`${API_URL}/groups/${groupId}`)
}

export default GroupsService
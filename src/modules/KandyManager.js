
const RemoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${RemoteURL}/candiesArray/${id}`).then(r => r.json())
    },
    getAll() {
        return fetch(`${RemoteURL}/candiesArray`).then(r => r.json())
    }
}
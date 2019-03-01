
const RemoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${RemoteURL}/locationsArray/${id}`).then(r => r.json())
    },
    getAll() {
        return fetch(`${RemoteURL}/locationsArray`).then(r => r.json())
    }
}
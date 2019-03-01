
const RemoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${RemoteURL}/employeesArray/${id}`).then(r => r.json())
    },
    getAll() {
        return fetch(`${RemoteURL}/employeesArray`).then(r => r.json())
    }
}
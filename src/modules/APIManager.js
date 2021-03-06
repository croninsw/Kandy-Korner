import Settings from "./Settings"

export default Object.create(null, {
    getOne: {
        value: function(id) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`)
            .then(e => e.json())
        }
    },
    getAll: {
        value: function() {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`)
            .then(e => e.json())
        }
    },
    delete: {
        value: function(id) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}/${id}`, {
                method: "DELETE"
            })
            .then(e => e.json())
            .then(() => fetch(`${Settings.remoteURL}/${this.desiredDatabase}`))
            .then(e => e.json())
        }
    },
    post: {
        value: function(obj) {
            return fetch(`${Settings.remoteURL}/${this.desiredDatabase}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
            .then(e => e.json())
        }
    }
})
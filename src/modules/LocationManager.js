const remoteURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch (`${remoteURL}/locations`).then(result => result.json())
    },
    get(id) {
        return fetch (`${remoteURL}/locations/${id}`).then(result => result.json())
    },
    delete(id) {
        return fetch (`${remoteURL}/locations/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newLocation) {
        return fetch(`${remoteURL}/locations`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newLocation)
        }).then(result => result.json())
    },
    update(editedLocation) {
        return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedLocation)
        }).then(result => result.json())
    }
}
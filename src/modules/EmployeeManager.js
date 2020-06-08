const remoteURL = "http://localhost: 5002"

export default {
    getAll() {
        return fetch (`${remoteURL}/employees`).then(result => result.json())
    },
    get(id) {
        return fetch (`${remoteURL}/employees/${id}`).then(result => result.json())
    },
    delete(id) {
        return fetch (`${remoteURL}/employees/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newEmployee) {
        return fetch(`${remoteURL}/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(result => result.json())
    },
    update(editedEmployee) {
        return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedEmployee)
        }).then(result => result.json())
    }
}
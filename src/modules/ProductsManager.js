const remoteURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch (`${remoteURL}/products`).then(result => result.json())
    },
    get(id) {
        return fetch (`${remoteURL}/products/${id}`).then(result => result.json())
    },
    delete(id) {
        return fetch (`${remoteURL}/products/${id}?_expand=productType`, {
            method: "DELETE"
        }).then(result => result.json())
    },
    post(newProduct) {
        return fetch(`${remoteURL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        }).then(result => result.json())
    },
    update(editedProduct) {
        return fetch(`${remoteURL}/products/${editedProduct.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedProduct)
        }).then(result => result.json())
    },
    getAllTypes() {
        return fetch(`${remoteURL}/productTypes`).then(result => result.json())
    },
    getTypeById(id){
        return fetch(`${remoteURL}/productTypes/${id}`).then(result => result.json())
    }

}
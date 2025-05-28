console.log("Hello")
function saveProducts() {
        const newProduct = {
        name: "1017",
        description: "New Phone Z",
        price: 433
        }
           const response =  ("http://localhost:8080/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(newProduct)
        })
}

document.getElementById("save-button")
    .addEventListener("click", saveProducts )

function loadProducts() {

    fetch("http://localhost:8080/")
    .then(res => res.json())
    .then(res => { console.log(res) })

}

document.getElementById("btn-load-product")
    .addEventListener("click", loadProducts )


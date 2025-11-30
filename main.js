let currentPage = 1

const pages = {
    product: document.getElementById('productPage'),
}

const objects = {
    productCard: document.getElementById('productCard'),
}

let products = []

function loadCurrentProducts() {
    let link = `https://fakestoreapi.com/products`

    fetch(link)
    .then(requie => requie.json())
    .then(data=> {
        for (let last of products) {
            last.remove()
        }

        for (let product of data) {
            let card = objects.productCard.cloneNode(true)
            card.style.display = 'flex'
            card.querySelector('#productImg').src = product.image
            card.querySelector('#productDescription').textContent = product.title
            pages.product.append(card)

            products.push(card)
        }
    })
}

loadCurrentProducts()
loadCurrentProducts()
loadCurrentProducts()
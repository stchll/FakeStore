let currentPage = 1

const pages = {
    product: document.getElementById('productPage'),
}

const objects = {
    productCard: document.getElementById('productCard'),
    popup: document.getElementById('popup')
}

const buttons = {
    popupClose: document.getElementById('popupClose'),
}

let products = []

function setupPopup(product) {
    objects.popup.style.display = 'flex'
    
    objects.popup.

    buttons.popupClose.onclick = function() {
        objects.popup.style.display = 'none'
    }
}

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
            card.querySelector('#productPrice').textContent = `$${product.price}`
            pages.product.append(card)

            products.push(card)

            card.onclick = function() {
                setupPopup(product)
            }
        }
    })
}

setTimeout(()=>{
    loadCurrentProducts()
},3000)
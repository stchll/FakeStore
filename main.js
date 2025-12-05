let currentPage = 1

const pages = {
    product: document.getElementById('productPage'),
}

const objects = {
    productCard: document.getElementById('productCard'),
    popup: document.getElementById('popup'),
    descriptionPart: document.getElementById('descriptionPopupPart'),
    clothName: document.getElementById('clothName'),
}

const buttons = {
    popupClose: document.getElementById('popupClose'),
}

const sounds = {
    fade: new Audio('./Sounds/fade.mp3')
}

sounds.fade.volume = 0.2

let products = []

function typeWrite(object,content) {
    let current = 0

    object.textContent = ""

    function type() {
        if (current <= content.length - 1) {
            object.textContent += content[current]

            current ++

            setTimeout(type,10)
        } else {
            object.textContent = content
        }
    }

    type()
}

function setupPopup(product) {
    objects.popup.style.display = 'flex'
    
    objects.popup.querySelector('.imagePart').querySelector('img').src = product.image

    typeWrite(objects.clothName,product.title)

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

                sounds.fade.currentTime = 0
                sounds.fade.play()
            }
        }
    })
}

loadCurrentProducts()
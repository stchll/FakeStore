//Button items (Start)
const cartBtn = document.getElementById("CartBtn")
const HomeBtn = document.getElementById("HomeBtn")
//Button items (End)

//Cart transition items (Start)
const cartMenu = document.querySelector(".cartMenu")
const wrap = document.querySelector(".wrap")
//Cart transition items (End)

//Page button items (Start)
const homePageBtn = document.querySelector("#homeBtn")
const goodsPageBtn = document.querySelector("#goodsBtn")
const contactPageBtn = document.querySelector("#contactsBtn")
const popularProductPageBtn = document.querySelector("#popularProductsBtn")
const footerPageBtn = document.querySelector("#footerBtn")
//Page button items (End)

//Page items (Start)
const homePage = document.querySelector(".homePage")
const goodsPage = document.querySelector(".goodsPage")
const contactPage = document.querySelector(".contactPage")
const popularProductPage = document.querySelector(".popularProductPage")
const footerPage = document.querySelector(".footer")
//Page items (End)

let switchTimeout
let canSwitch = true

function scrollTo(scrollToItem) {
    scrollToItem.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

cartBtn.onclick = function () {
    if (canSwitch) {
        canSwitch = false
        cartMenu.style.left = "0%"
        clearTimeout(switchTimeout)
        wrap.style.opacity = "0"
        switchTimeout = setTimeout(function () {
            wrap.style.display = "none"
            canSwitch = true
        }, 300)
    }
}

HomeBtn.onclick = function () {
    if (canSwitch) {
        canSwitch = false
        cartMenu.style.left = "-100%"
        wrap.style.opacity = "1"
        wrap.style.display = "flex"
        canSwitch = true
    }
}

homePageBtn.onclick = function () {
    scrollTo(homePage)
}
goodsPageBtn.onclick = function () {
    scrollTo(goodsPage)
}
contactPageBtn.onclick = function () {
    scrollTo(contactPage)
}
popularProductPageBtn.onclick = function () {
    scrollTo(popularProductPage)
}
footerPageBtn.onclick = function () {
    scrollTo(footerPage)
}
const cartBtn = document.getElementById("CartBtn")
const HomeBtn = document.getElementById("HomeBtn")

const cartMenu = document.querySelector(".cartMenu")
const wrap = document.querySelector(".wrap")

let switchTimeout

cartBtn.addEventListener("click", function () {
    cartMenu.style.left = "0%"
    clearTimeout(switchTimeout)
    wrap.style.opacity = "0"
    switchTimeout = setTimeout(function () {
        wrap.style.display = "none"
    }, 300)
})
HomeBtn.addEventListener("click", function () {
    cartMenu.style.left = "-100%"
    wrap.style.opacity = "1"
    wrap.style.display = "flex"
})
const cartBtn = document.getElementById("CartBtn")
const HomeBtn = document.getElementById("HomeBtn")

const cartMenu = document.querySelector(".cartMenu")
const wrap = document.querySelector(".wrap")

let switchTimeout
let canSwitch = true

cartBtn.onclick = function () {
    if (!canSwitch) {return}

    canSwitch = false
    cartMenu.style.left = "0%"
    clearTimeout(switchTimeout)
    wrap.style.opacity = "0"
    switchTimeout = setTimeout(function () {
        wrap.style.display = "none"

        canSwitch = true
    }, 3 * 100)
}

HomeBtn.onclick = function () {
    if (!canSwitch) {return}

    canSwitch = false

    cartMenu.style.left = "-100%"
    wrap.style.opacity = "1"
    wrap.style.display = "flex"

    canSwitch = true
}
let nav = document.querySelector(".nav-bar")
let lastScroll = window.pageYOffset

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset

    if(currentScroll > lastScroll) {
        nav.style.top = "-100px"
    }else {
        nav.style.top = "0"
    }

    lastScroll = currentScroll
})
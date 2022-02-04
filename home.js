// Disabled right click
document.addEventListener('contextmenu', event => event.preventDefault());


// Scrolling function
const scrollUp = document.querySelector('#scroll-up')

scrollUp.addEventListener("click", ()=> {
    window.scrollTo ( {
        top:0,
        left:0,
        behavior: "smooth",
    })
})

// Hamburger menu

const hamBurger = document.querySelector('#burger-menu')
const ulList = document.querySelector('nav ul')
const navBar = document.querySelector('nav')

hamBurger.addEventListener("click", ()=> {
    ulList.classList.toggle("show")
})

// Hamburger closing
const navLink = document.querySelectorAll('.nav-link')

navLink.forEach((lnk) =>
    lnk.addEventListener("click", () => {
    ulList.classList.remove("show")
})
)

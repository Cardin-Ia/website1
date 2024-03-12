nav = document.querySelector('.nav')

window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY)
    if (window.scrollY > 223) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

nav2 = document.querySelector('.nav2')

window.addEventListener('scroll', fixNav)

function fixNav() {
    console.log(window.scrollY)
    if (window.scrollY > 223) {
        nav2.classList.add('active')
    } else {
        nav2.classList.remove('active')
    }
}
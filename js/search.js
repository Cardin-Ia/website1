btn = document.querySelector('.btn')
search = document.querySelector('.search')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})

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
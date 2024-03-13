toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')
close = document.getElementById('close')


toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

open.addEventListener('click', () => {
    modal.classList.add('show-modal')
})

close.addEventListener('click', () => {
    modal.classList.remove('show-modal')
})

window.addEventListener('click' , (e) => {
    if (e.target == modal) {
        modal.classList.remove('show-modal')
    }
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
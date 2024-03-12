loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')

load = 0

int = setInterval(blurring, 40)

function blurring() {
    load++

    if (load > 99){
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - load/100

    bg.style.filter =  `blur(${30-load/100*30}px)`
}

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
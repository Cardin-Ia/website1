panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
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
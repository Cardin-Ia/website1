btn = document.querySelector('.btn')
var randomNumber = Math.floor(Math.random() * 256);

btn.addEventListener('click', () => {
    search.classList.toggle('active')
})
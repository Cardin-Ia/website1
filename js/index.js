btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 256);
    var randomNumber2 = Math.floor(Math.random() * 256);
    var randomNumber3 = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";
    document.body.style.backgroundColor = rgb;
    document.body.classList.remove('instant-color-change');

})

btn1 = document.querySelector('.btn1')

btn1.addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 256);
    var randomNumber2 = Math.floor(Math.random() * 256);
    var randomNumber3 = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";
    document.body.style.backgroundColor = rgb;
    classList.add('instant-color-change');
})
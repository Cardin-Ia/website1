btn = document.querySelector('.btn')
btn1 = document.querySelector('.btn1')

btn.addEventListener('click', () => {
    var randomNumber1 = Math.floor(Math.random() * 256);
    var randomNumber2 = Math.floor(Math.random() * 256);
    var randomNumber3 = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + randomNumber1 + "," + randomNumber2 + "," + randomNumber3 + ")";
    document.body.style.backgroundColor = rgb;

    btn1.addEventListener('click', () => {
        var HrandomNumber1 = Math.floor(Math.random() * 256);
        var HrandomNumber2 = Math.floor(Math.random() * 256);
        var HrandomNumber3 = Math.floor(Math.random() * 256);
        var rgb1 = "rgb(" + HrandomNumber1 + "," + HrandomNumber2 + "," + HrandomNumber3 + ")";
        document.body.style.backgroundColor = rgb1;
})
// функция видимости выбранного блока карточек "физ лиц"
function individuals() {
    document.getElementById("cards-2").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: none");
    document.getElementById("cards-1").setAttribute("style", "display: flex");
}

// функция видимости выбранного блока карточек "юр лиц"
function legal() {
    document.getElementById("cards-1").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: none");
    document.getElementById("cards-2").setAttribute("style", "display: flex");
}

// функция видимости выбранного блока карточек "прочие"
function other() {
    document.getElementById("cards-1").setAttribute("style", "display: none");
    document.getElementById("cards-2").setAttribute("style", "display: none");
    document.getElementById("cards-3").setAttribute("style", "display: flex");
}

//забираем кнопку "наверх"
let mybutton = document.getElementById("btn-back-to-top");

//задание функции: показать кнопку когда прокрутка ниже 20px от верха документа
// создание функции прокрутки
window.onscroll = function () {
    scrollFunction();
};
// функция видимости кнопки
function scrollFunction() {
    if (document.body.scrollTop > 20 ||document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// функция возврата к верху документа при нажатии на кнопку
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
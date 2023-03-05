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

// Модальное окно услуг
const winModal = document.getElementById('winModal')
winModal.addEventListener('show.bs.modal', event => {
    // Кнопка, которая активировала модальное окно
    const button = event.relatedTarget
    // Извлечение информации из атрибутов data-bs-*
    const recipient = button.getAttribute('data-bs-whatever')

    // Обновление содержимого модального окна.
    const modalTitle = winModal.querySelector('.modal-title')
    const modalBodyTextarea = winModal.querySelector('.modal-body textarea')

    modalTitle.textContent = `${recipient}`
    modalBodyTextarea.value = recipient
})


document.getElementById("btn-service").onclick = function () {
    document.getElementById("connection").scrollIntoView({behavior: "smooth"});
}
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

let mybutton = document.getElementById("btn-back-to-top");
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

setTimeout(() => {
    (document.getElementById('floatingTextarea2')).value = '';
    for (let item of document.getElementsByClassName("btn-service")) {
        item.onclick = function () {
            let txt = item.parentElement.parentElement.children[0].textContent;
            document.getElementById("connection").scrollIntoView({behavior: "smooth"});
            (document.getElementById('floatingTextarea2')).value = txt.trim();
    }
    }

}, 0)

// Модальное окно услуг
const winModal = document.getElementById('winModal')
winModal?.addEventListener('show.bs.modal', event => {
    const button = event.relatedTarget
    const recipient = button.getAttribute('data-bs-whatever')
    const modalTitle = winModal.querySelector('.modal-title')
    const modalBodyTextarea = winModal.querySelector('.modal-body textarea')
    modalTitle.textContent = `${recipient}`
    modalBodyTextarea.value = recipient
})

// настройка формы обратной связи
function showSnack(id, text, time) {
    document.getElementById(id).setAttribute("style", "display: block");
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
    }, time)
}

function ValidMail() {
    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const result = validateEmail(document.getElementById('email').value);
    if (!result) {
        console.log('invalid email')
        document.getElementById("alert-email").setAttribute("style", "visibility: visible")
    }
    return !!result
}
 
function ValidPhone() {
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    if (!re.test(myPhone)) {
        console.log('invalid phone')
        document.getElementById("alert-phone").setAttribute("style", "visibility: visible")
    }
    return re.test(myPhone);
}

document.getElementById("btn-action").onclick = function () {
    if (document.getElementById("email").value === "") {
        showSnack('snackAlert', '', 3000)
    } else if (document.getElementById("phone").value === "") {
        showSnack('snackAlert', '', 3000)
    } else {
        let vPhone = ValidPhone();
        let vEmail = ValidMail();
        if (vEmail) {
            document.getElementById("alert-email").setAttribute("style", "visibility: hidden");
        } else if (vPhone) {
            document.getElementById("alert-phone").setAttribute("style", "visibility: hidden");
        }
        if (vPhone && vEmail) {
            document.getElementById("btn-action").setAttribute('disabled', '');
            document.getElementById("alert-email").setAttribute("style", "visibility: hidden");
            document.getElementById("alert-phone").setAttribute("style", "visibility: hidden");
            sendRequest();
        }
    }
}

function sendRequest() {
    document.getElementById("btn-action").setAttribute('disabled', '');
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let name = document.getElementById('name').value;
    let message = document.getElementById('floatingTextarea2').value;

    var data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('phone', phone);
    data.append('message', message);

    fetch('https://playground.ksdigital.ru/api/inquisitor/mailer', {
        method: 'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          email, phone, message, name
        })
    })
        .then(response => {
            if (response.status == 200) {
                console.log("Успех");
                clearValues();
                showSnack('snackOk', '', 3000)
                document.getElementById("btn-action").removeAttribute('disabled');
            } else {
                console.log("Ошибка " + response.status);
                showSnack('snackErr', '', 3000)
                document.getElementById("btn-action").removeAttribute('disabled');
            }
        })
        .catch(err => {
            showSnack('snackErr', '', 3000)
            document.getElementById("btn-action").removeAttribute('disabled');
        })
}


function clearValues() {
    (document.getElementById('email')).value = '';
    (document.getElementById('phone')).value = '';
    (document.getElementById('name')).value = '';
    (document.getElementById('floatingTextarea2')).value = '';
}

// настройка модального окна обратной связи
function showSnackMod(id, text, time) {
    document.getElementById(id).setAttribute("style", "display: block");
    setTimeout(() => {
        document.getElementById(id).style.display = 'none';
    }, time)
}
function ValidMailMod() {
    const validateEmail = (email) => {
        return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const result = validateEmail(document.getElementById('emailMod').value);
    if (!result) {
        console.log('invalid emailMod')
        document.getElementById("alert-emailMod").setAttribute("style", "visibility: visible")
    }
    return !!result
}
function ValidPhoneMod() {
    const re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phoneMod').value;
    if (!re.test(myPhone)) {
        console.log('invalid phoneMod')
        document.getElementById("alert-phoneMod").setAttribute("style", "visibility: visible")
    }
    return re.test(myPhone);
}
const sendModal = document.getElementById("btn-actionMod")
sendModal ? sendModal.onclick = function () {
    if (document.getElementById("emailMod").value === "") {
        showSnack('snackAlertMod', '', 3000)
    } else if (document.getElementById("phoneMod").value === "") {
        showSnack('snackAlertMod', '', 3000)
    } else {
        let vPhone = ValidPhoneMod();
        let vEmail = ValidMailMod();
        if (vEmail) {
            document.getElementById("alert-emailMod").setAttribute("style", "visibility: hidden");
        } else if (vPhone) {
            document.getElementById("alert-phoneMod").setAttribute("style", "visibility: hidden");
        }
        if (vPhone && vEmail) {
            document.getElementById("btn-actionMod").setAttribute('disabled', '');
            document.getElementById("alert-emailMod").setAttribute("style", "visibility: hidden");
            document.getElementById("alert-phoneMod").setAttribute("style", "visibility: hidden");
            sendRequestMod();
        }
    }
} : {};

function sendRequestMod() {
    document.getElementById("btn-actionMod").setAttribute('disabled', '');
    let email = document.getElementById('emailMod').value;
    let phone = document.getElementById('phoneMod').value;
    let name = document.getElementById('nameMod').value;
    let message = document.getElementById('messageMod').value;

    var data = new FormData();
    data.append('nameMod', name);
    data.append('emailMod', email);
    data.append('phoneMod', phone);
    data.append('messageMod', message);

    fetch('https://playground.ksdigital.ru/api/inquisitor/mailer', {
        method: 'POST',
        headers: {
          'Accept': 'application/x-www-form-urlencoded',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
          email, phone, message, name
        })
    })
        .then(response => {
            if (response.status == 200) {
                console.log("Успех");
                clearValuesMod();
                showSnackMod('snackOkMod', '', 3000)
                document.getElementById("btn-actionMod").removeAttribute('disabled');
            } else {
                console.log("Ошибка " + response.status);
                showSnack('snackErrMod', '', 3000)
                document.getElementById("btn-actionMod").removeAttribute('disabled');
            }
        })
        .catch(err => {
            showSnack('snackErrMod', '', 3000)
            document.getElementById("btn-actionMod").removeAttribute('disabled');
        })
}
function clearValuesMod() {
    (document.getElementById('emailMod')).value = '';
    (document.getElementById('phoneMod')).value = '';
    (document.getElementById('nameMod')).value = '';
    (document.getElementById('messageMod')).value = '';
}
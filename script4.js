// Получаем модальное окно
const modal = document.getElementById("modal");

// Получаем кнопку, которая открывает модальное окно
const btn = document.getElementById("openModal");

// Получаем элемент <span>, который закрывает модальное окно
const span = document.getElementById("closeModal");

// Когда пользователь нажимает на кнопку, открываем модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрываем модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает в любом месте вне модального окна, закрываем его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

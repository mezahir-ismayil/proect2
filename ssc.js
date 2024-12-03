
  
function createUser() {
    window.location.href = "login.html";
}
function sss() {
    window.location.href = "index.html";
}




const users = {};

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if (users[username]) {
        alert('Пользователь с таким именем уже существует.');
    } else {
        users[username] = password;
        alert('Аккаунт успешно создан!');
        this.reset();
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    if (users[username] && users[username] === password) {
        alert('Вход выполнен успешно!');
    } else {
        alert('Неверное имя пользователя или пароль.');
    }
});



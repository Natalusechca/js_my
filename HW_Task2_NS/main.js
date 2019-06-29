
alert('Hello, friend!');
var loginedUser = null;
var users = [
    { name: 'Nata', surname: 'Sam', age: '29', email: '12345', password: '12345' },
    { name: 'Alex', surname: 'Brown', age: '27', email: '56789', password: '56789' },
    { name: 'Maria', surname: 'Black', age: '25', email: '01234', password: '01234' }
];

var isCounting = true;

do {
    var userchoice = +prompt(' Вы можете: 1. Зарегистироваться 2. Авторизироваться 3. Просмотреть список всех пользователей 4. Изменить данные пользователя 5. Выйти ');
    menegerChoice(userchoice);
    isCounting = comeBack();
 }

while (isCounting);

function addUser() {
    console.log('[Зарегистрироваться]' === 1);
    var name = prompt('Введите Ваше имя');
    var surname = prompt('Введите Вашу фамилию');
    var age = prompt('Введите Ваш возраст');
    var email = prompt('Введите Ваш e-mail');
    var password = prompt('Введите пароль');
    var newuser = new Object();
    newuser.name = name;
    newuser.surname = surname;
    newuser.age = age;
    newuser.email = email;
    newuser.password = password;
    users.push(newuser);
}

function comeBack() {
    var c = confirm('Вернуться в начальное меню?');
    if (c === true) {
        // +prompt(' Вы можете: 1. Зарегистироваться 2. Авторизироваться 3. Просмотреть список всех пользователей 4. Изменить данные пользователя 5. Выйти ');
    } else {
        alert('Goodbye!');
    }
    return c;
}

function login() {
    console.log('[Авторизироваться]' === 2);
    var email = prompt('Введите Ваш e-mail');
    var password = prompt('Введите пароль');
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log(['Hello'], 'Hello!' + users[i].name + '!');
                loginedUser = users[i];
                break;
            }
        }

    }
    if (loginedUser === null) {
        console.log(['Fail'], 'Пользователь не найден!');
    }
}
function listOfUsers() {
    console.log('[Просмотреть список всех пользователей]' === 3);
    if (users.length > 0) {
        for (var i = 0; i < users.length; i++) {
            console.log(['userName'], users[i].name);
            console.log("..........................");
        }
    } else {
        console.log(['Пользователи не найдены'], 'Пользователи не найдены');
    }
}

function menegerChoice(userchoice) {
    switch (userchoice) {
        case 1:
            addUser();


            break;
        case 2:
            login();

            break;
        case 3:
            listOfUsers();

            break;
        case 4:
            console.log('[Изменить данные пользователя]' === 4);
            break;
        case 5:
            console.log('[Выйти]' === 5);
            alert('Goodbye, ' + loginedUser.name + '!');
            break;
    }
    
}




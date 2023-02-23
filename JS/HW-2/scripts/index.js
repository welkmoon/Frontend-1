// -----Які існують типи даних у Javascript?-----
// Number, 
// BigInt (числа довільної довжини),
// String,
// Boolean (true/false),
// Значення null,
// Значення underfined,
// Object,
// Symbol

// -----У чому різниця між == і ===?-----
// Оператор суворої рівності === перевіряє рівність без приведення типів, на відміну від ==
// тобто "3" == 3 TRUE
// "3" === 3 FALSE

// -----Що таке оператор?-----
// це символ або набір символів, які вказують на виконання певної операції зі значеннями.
// Оператори дозволяють виконувати арифметичні, логічні, порівняння, присвоєння та інші операції.

let userName;
let userAge;

do {
    userName = prompt("Enter your name", 'Mariia');
} while(!userName);

do {
    userAge = parseInt(prompt('Enter your age','19'));
} while(!userAge || isNaN(userAge));

if (userAge<18){
    alert('You are not allowed to visit this website.');
}
else if (userAge>=18 && userAge<=22){
    const confirmResult = confirm('Are you sure you want to continue?');
    if (confirmResult){
        alert(`Welcome, ${userName}`);
    }
    else{
        alert('You are not allowed to visit this website.');
    }
}
else{
    alert(`Welcome, ${userName}`);
}

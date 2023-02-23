// ------Описати своїми словами у кілька рядків, навіщо у програмуванні потрібні цикли.------
// У програмуванні цикли використовуються для повторення певних дій декілька разів.  
// Цикли допомагають скоротити кількість коду, зробити програму більш логічною та структурованою. 

// ------Опишіть у яких ситуаціях ви використовували той чи інший цикл в JS.------
// Минулого заняття, коли вивчали цикли, ми використовували цикл while для того, щоб перевірити коректність введення інформації в prompt юзером 
// і викликати prompt доти, доки інформація не буде введена коректно. Використовували цикл for щоб перебрати якийсь числовий проміжок та за допомогою if відібрати всі парні числа 

// ------Що таке явне та неявне приведення (перетворення) типів даних у JS?------
// Явне приведення відбувається, коли розробник явно вказує на зміну типу даних. 
// Неявне приведення відбувається автоматично, коли JavaScript намагається виконати операції з різними типами даних.


let userNumber
let foundNumber = false;

do{
    userNumber = +prompt('Enter the number');
}
while(isNaN(userNumber) || parseInt(userNumber) !== parseFloat(userNumber));

for ( let i = 0; i <= userNumber; i++){
    if (i % 5 === 0){
        console.log(i);
        foundNumber = true
    }
}

if(!foundNumber){
    console.log("Sorry, no numbers");
}


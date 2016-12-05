// Дозволяє багато раз використовувати один і той же шматок коду, для скрития кода і построєння програм
// ф-ція складається з 4-х частин:
/* 1. function */
// 2. func
// 3. ()
// 4. { інструкція; }
function funcDec ( a, b) {   //   a,b - параметри
 return a + b; // без return == буде undefined     ===== фанкшен декларейшн -- має ХОСТІНГ
}
//console.log( funcDec(3,4) );  // 3,4 - аргументи

//console.log( funcDec ); // == код цієї ф-ці

// !!!undefined + undefined = NaN


// ===== фанкшен експрешен - літерал функції (визначення ф-ції): спочатку створюємо змінну, а потім присвоюємо їй ф-цію, в основн анонімну

var funcExp = function ( a, b ) {
    return a + b;
};
//console.log( funcExp(2,3) );

// ХОСТІНГ :
 function func1() {
     function funcExample() {
        return 'one';
     }

     return funcExample();

     function funcExample() {
         return 'two';
     }
 };

 //console.log( func1() ); // === two - виклик функції раніше її визначення

// хостінг з фанкшен експрешен
function func2() {
     var funcExample = function() {
        return 'one';
    }

    return funcExample();

   var funcExample = function () {
        return 'two';
    }
};
// console.log( func1() ); // === two
// console.log( func2() ); // === one


// Ф-ЦІЯ ЗВОРОТНЬОГО ВИКЛИКУ - виконати ф після якоїсь події:
var func = function ( callback) {
 var name = "Nick";
    return callback(name);
 };


// console.log( func( function(n){
//     return "Hello, " + n  ; // == Hello, Nick
// }) );

// ПОВЕРНЕННЯ ЦІЛОЇ Ф-ЦІЇ
var func1 = function () {
    return function () {
        console.log( 'Hiiii');
    };
    };
 //func1 ()(); // Hiiii

// АНОНІМНА САМОВИКЛИКАЮЧА Ф-ЦІЯ
var prop = 1;
//console.log(prop);
( function () {
 //console.log('Ky-ky')
})();


// ОБ'ЄКТ, КОСЯЩИЙ ПІД МАСИВ
var funcArgs = function ( ) {
    console.log(arguments);
    var i,
        sum = 0;
    for  ( i = 0; i < arguments.length; i++) {
        sum += arguments[i];
          };
  return sum;
};
console.log( funcArgs( 1,  2, 3, 15) ) ;


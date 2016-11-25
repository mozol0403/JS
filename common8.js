
//console.log(typeof String(455) ); // == string
//console.log(typeof Number('455') ); // == number
//console.log(typeof Boolean(455) ); // == boolean

// АВТОМАТИЧНА КОНВЕРТАЦІЯ ТИПІВ ДАНИХ:
//console.log( typeof (5+'1') ); // 51 == STRING - переобразование в строку

//console.log (5+'');   // 5  == STRING - переобразование в строку
//console.log (typeof +'5'); // 5 == number - бистро перевести в число
//console.log (typeof !!'5'); // true == boolean
//console.log ( +''); // == 0
//console.log ( true); // == 1
//console.log ( +false); // == 0


var num = 777;
console.log(typeof (num + '') ); // string
console.log(typeof num.toString() ); // string

console.log( typeof parseInt( "100 px" ) ); //  == 100 --- number, коли потрібно взяти число
console.log( typeof parseFloat( "100.2 px" ) ); // 100.2 --- number, коли потрібно взяти число з плаваючою точкою




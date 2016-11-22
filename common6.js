var str = '"String" is a data type'; // == "string" is a data type
     //str2=""string" is a data type";  // == помилка, так не можна писати --- потрібно ставити слеш:
      str2="\"string\" is a data type"; // == екранування
      longStr = ' длинная\n  \bкакая\n \t то строка'; // \n - спецсимвол - перенос строки; \t - Tab; \b - удаления сичмволов
   //console.log( longStr );

//!!!console.log( str2.length ); // к-ть символів в змінній
//console.log( 'HELLO d' + 'world' ); // == HELLO dworld, або ще один варіант аналогічний:
//console.log('HELLO d'.concat('world')); // == HELLO dworld

//!!!console.log(str.charAt(1) ); // == s виводить 2-й символ змінної (рахує з нуля);
//console.log(str.charCodeAt(0) ); // == чар код символа видає;

//console.log(str.substring(5, 8) ); // == ng" - видає строку з 6-го по 8-й символа починаючи
//!!!console.log(str.slice(-9) ); // обрізає з кінця == data type
//!!!console.log(str.substr(5, 8 ) ); // ==ng" is a - видає з 5-го символа і ще 8-м сиволів включно

//!!!console.log(str.split(' ' ) ); // == розбив строку на масив по пробілу [""string"", "is", "a", "data", "type"];
//console.log(str.split(',' ) ); // == розбив строку на масив по комі [""string" is", " a data type"];

//!!!console.log(str.replace('string', 'number' ) ); // заміняє одне значення('string') іншим ('number') == "number" is a data type
//console.log(str.indexOf('s') ); // по символу виводим індекс - протилежний методу charAt == 1;

console.log(str.toUpperCase('s') ); // великі всі букви === "STRING" IS A DATA TYPE

console.log(str.toLowerCase('s') ); // малі всі букви === "string" is a data type
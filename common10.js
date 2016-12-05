var arr = [1,2,'str', {}]; // спосіб літерала
// var arr2 = new Array( 1,2,'str' ); // Один з методів створення масива, який довший(не рекомендують)
// console.log(arr);
// console.log(arr2);

// як діставати елементи з масиву:
//console.log( arr[2]  ); // == str
// добавити елемент
//arr[8] = 'six';
//console.log( arr ); // [1, 2, "str", Object, 6: "six"]
//console.log( arr[5] ); // == !!! undefined !!! - дирки в масиві

//довжина масиву +1
//arr.length;
//console.log(arr.length);

//видалення елементів
//delete arr[1];
//console.log(arr); // [1, 2: "str", 3: Object] - поганий метод - дає !!! undefined !!! при виклику видаленного елемента КРАЩИЙ МЕТОД:

arr.splice(1,1);
//console.log(arr); // [1, "str", Object]

// Задаємо довжину масива:
 arr. length = 2;
arr[arr.length] = 'new'; //  присоїти новому елементу довжину масива == [1, "str", "new"] == додається в кінець масива
// console.log(arr); // == [1, "str"]

// Матриця - многомірний масив
var matrix = [
   [1,2,3],
   [4,5,6],
   [7,8,9]
]
// console.log(matrix); // == [Array[3], Array[3], Array[3]]
//console.log( matrix [1][1] ); // == 5 - другий ряд,  2-ге число

// Конкат, конкатинація - СКЛАДАННЯ МАСИВІВ:
var newArr = arr.concat(matrix);
//console.log(newArr); // склали два масиви arr та matrix == [1, 2, "str", Object, Array[3], Array[3], Array[3]]

//Перетворення масива в строку:
//arr.join('');
//console.log( arr.join(', ') ); // == 1, str, new

// Вставити швидко якийсь елемент в кінець масива
 arr.push('new2');
//console.log(arr); // == [1, "str", "new", "new2"]

//удалити останній елемент масива
arr.pop();
//console.log(arr);

//Додати перший елемент
arr.unshift('up_new');
//console.log(arr);
//Видалити перший елемент
arr.shift();
//console.log(arr);
//Метод реверс - в зворотній стороні виводить
//var reverseArr = arr.reverse();
//console.log( reverseArr ); // == ["new", "str", 1]

//Вирізає кусок масива, створюючи новий масив:
var sliced = arr.slice( 0,3 );  // вказуємо з якого по який вирізаємо
console.log( sliced ); // === [1, "str", "new"]
var sliced = arr.slice( 1,3 );  // вказуємо з якого по який вирізаємо
console.log( sliced ); // === ["str", "new"]






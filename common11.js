 var i;

// ----- цикл for:
// for ( i = 0; i<10; i++) {     // інсцелізація; тест; інкримент
// console.log( i );
// }

var arr = [1,2,3],
 len=arr.length;
 for ( i = 0; i<len; i++) {     // інсцелізація; тест; інкримент  ==ЗАДАЄМО УМОВУ ВИКОНАННЯ В КРУГЛИХ ДУШКАХ
 console.log( arr[i] * 2 ); // == 2, 4, 6  ==ЗАДАЄМО ДІЮ (НАД УМОВОЮ)
}

 // ------ цикл for in  == для обходу об'єктів
//  var obj = {
//      propp: 'one',
//      proppSecond: 'two'
//  },
//  prop;
//  for ( prop in obj ) {
//      if ( obj.hasOwnProperty(prop) ) {
// console.log( prop + ' : ' + obj[prop])
//    }
//  }

 //цикл while
//  var k = 0;
//  while( k<10 ) {
// console.log( k++ );
//  };

 //цикл do while
 var h = 0;
 do {
//console.log( h++ )
 } while ( h < 10 );


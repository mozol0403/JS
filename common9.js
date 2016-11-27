//ДВА МЕТОДИ ЗАДАННЯ ОБ'ЄКТА:
//1. var obj = new Object(); - майже не використовуєтьсяЖ 2-й спосіб:

var obj = {
    sdgdsg : 'str', // ВЛАСТИВІСТЬ
    func : function() {
        console.log (this);
    }   // МЕТОД
};
//console.log(obj.sdgdsg);
//Дістаємо властивості(точечно):
//console.log( typeof obj.sdgdsg ); // == str

//Дістаємо властивості(квадратні скобки):
var prop = 'func';
// console.log( obj[prop] );
// console.log( obj.rrggg || 'ryryy')
//ДОБАМИТИ НОВУ ВЛАСТИВІСТЬ:
 obj.pet = 'cool';
//console.log(obj);
//ЗМІНЮВАТИ ВЛАСТИВОСТІ
 obj.sdgdsg = 'Den'; //== Den
 console.log(obj.sdgdsg);

// var  a = { p: 1 }, b = { p: 2 }, c = { p: 3 };
// console.log(a, b, c);
// a = b = c = { p: 'new'};
// console.log(a, b, c);

// var y = obj;
// console.log( y.sdgdsg );

//Вдалення властивостей:
//delete obj.func;
//console.log(obj); // == Видалено func

// ДОСТУП ДО ОБ'ЄЕТА(НАПРИКЛАД, sdgdsg ):
//var obj = {
 //   sdgdsg : 'str', // ВЛАСТИВІСТЬ
 //   func : function() {
//console.log (this.sdgdsg);
  //   }   // МЕТОД;

//};
//obj.func(); // - круглі скобки - це виклик функції чи метода

// ОБ'ЯВЛЕНННЯ ГЛОБАЛЬНОСТІ змінних:
var MYAPP = {};

//ДВА МЕТОДИ ЗАДАННЯ ОБ'ЄКТА:
//1. var obj = new Object(); - майже не використовуєтьсяЖ 2-й спосіб:

var obj = {
    sdgdsg : 'str',
    func : function() {}
};
//Дістаємо властивості(точечно):
//console.log( typeof obj.sdgdsg ); // == str

//Дістаємо властивості(квадратні скобки):
var prop = 'func';
console.log( obj[prop] );





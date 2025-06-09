//Напишите функцию, которая принимает массив и возвращает true, если в массиве
//есть дубликаты, и false, если нет.Используйте строгий режим.

'use strict';

function duplicates(array) {
    return new Set(array).size !== array.length;
}

console.log(duplicates([1, 2, 3, 4, 5]));
console.log(duplicates([1, 1, 2, 2, 3]));

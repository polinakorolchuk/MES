//Напишите функцию, которая генерирует идентификатор строки 
//(указанной длины) из случайных символов.

function stringGen(num) {
    var text = ' ';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < num; i++)
        text +=possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log(stringGen(8));
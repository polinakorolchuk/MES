//Напишите функцию, которая принимает массив в качестве параметра и выдает
//пользовательскую ошибку, если массив пуст.

function checkArray(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('Ожидался массив, но получены другие данные');
        
    }

    if (arr.length === 0) {
        throw new Error('Массив пуст');
    }

    console.log('Массив:', arr);
}

try {
    const testArray = [1, 2, 3];
    checkArray(testArray);
} catch (err) {
    console.error('Произошла ошибка:', err.message);
}
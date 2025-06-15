//Напишите функцию, которая принимает число и выводит количество цифр в этом числе

function counting(num) {
    const strNum = Math.abs(num).toString();
    return strNum.length;
}

const result = counting(12345);
console.log(result);
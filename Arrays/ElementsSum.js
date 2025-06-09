//Напишите функцию, которая принимает массив с числами и находит сумму тех
//элементов этого массива, которые больше нуля и меньше десяти

function elementsSum(arr){
    return arr
    .filter(num => num > 0 && num < 10)
    .reduce((sum,num) => sum + num, 0);
}

console.log(elementsSum([1, 1, 1]));
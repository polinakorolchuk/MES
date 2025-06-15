//Создайте функцию и внутри неё объявите переменные с использованием var, let и const. 
//Попробуйте обратиться к этим переменным вне функции. Какие переменные будут видны снаружи функции, а какие нет?

function scope() {
    var varVariable = 'Var';
    let letVariable = 'Let';
    const constVariable = 'Const';
}

scope();

console.log(varVariable);
console.log(letVariale);
console.log(constVariable);
//Используя Promise, выведите числа от 1 до 10 через секунду каждый раз.
//Ограничения: setTimeout и new Promise() мы можно вызывать только один раз.

function displayNumbers() {
    let current = 1;

    return new Promise(resolve => {
        function tick() {
            console.log(current);
            current++;
            if (current <= 10) {
                setTimeout(tick, 1000);
            } else {
                resolve();
            }
        }
        tick();
    });
}

displayNumbers();


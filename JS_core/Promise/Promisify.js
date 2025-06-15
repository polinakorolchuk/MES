//Напишите функцию, которая конвертирует функцию, основанную на callbacks, в
//функцию, основанную на Promises

function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(null, sum);
    }, 1000);
}

function promisify(func) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

const addPromise = promisify(add);

addPromise(5, 7)
  .then(result => console.log("Сумма:", result))
  .catch(err => console.error("Ошибка:", err));



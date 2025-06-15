//Напишите функцию fetchUserData, которая использует async/await для загрузки данных
//о пользователе с сервера по его идентификатору. Функция должна
//принимать идентификатор пользователя в качестве аргумента и возвращать объект с данными о пользователе

async function fetchUserData(userId){
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if(!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }

        const userData = await response.json();
        return userData;

    } catch (error) {
        console.error('Ошибка:', error.message);
        throw error;
    }
}

fetchUserData(1)
.then(user => console.log('Данные пользователя:', user))
.catch(err => console.log('Ошибка:', err));
//Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

let userYear = +prompt('Введите год Вашего рождения');
const CURYEAR = new Date().getFullYear();
alert(`Вам ${CURYEAR - userYear} лет`);
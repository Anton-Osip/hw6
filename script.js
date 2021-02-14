document.write(`1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.<br><br>`);



document.write('aaa@bbb@ccc'.replace(/@/g, '!'));



document.write('<br><br>');

document.write(`2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.<br><br>`);



let date = '2025-12-31';

document.write(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));



document.write('<br><br>');

document.write(`3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).<br><br>`);



document.write('Я учу javascript!'.substr(2, 3));
document.write('<br>');
document.write('Я учу javascript!'.substr(6, 9));

document.write('<br>');
document.write('<br>');

document.write('Я учу javascript!'.substring(2, 5));
document.write('<br>');
document.write('Я учу javascript!'.substring(6, 'Я учу javascript!'.length - 1));


document.write('<br>');
document.write('<br>');


document.write('Я учу javascript!'.slice(2, 5));
document.write('<br>');
document.write('Я учу javascript!'.slice(6, 'Я учу javascript!'.length - 1));


document.write('<br><br>');

document.write(`4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.<br><br>`);


let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let elem of arr) {
    sum += Math.pow(elem, 3)
}

document.write(Math.sqrt(sum, 2));


document.write('<br><br>');

document.write(`5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.<br><br>`);


function fuu(a, b) {
    let c = Math.abs(a - b);
    return c;
}

document.write(fuu(3, 5));
document.write('<br>');
document.write(fuu(6, 1));


document.write('<br><br>');

document.write(`6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).<br><br>`);


function addZero(a) {
    if (a < 10) {
        a = '0' + a
    }
    return a;
};

let DateNow = new Date();
document.write(`${addZero(DateNow.getSeconds())}:${addZero(DateNow.getMinutes())}:${addZero(DateNow.getHours())} ${addZero(DateNow.getDate())}.${addZero(DateNow.getMonth())}.${addZero(DateNow.getFullYear())}`)


document.write('<br><br>');

document.write(`7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.<br><br>`);


document.write('aa aba abba abbba abca abea'.replace(/[^ab+a]/g, ' '))


document.write('<br><br>');

document.write(`8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.<br><br>`);


let regTell = /^\+\d{3}\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}/g
let tell = prompt('Введите номер телефона +## (###) ###-##-##', '+375 (17) 256-56-45')

function checkedTell(phone) {
    (regTell.test(phone)) ? document.write(phone + ' Телефон введен корректно'): document.write(phone + ' Телефон введен не корректно');
}

checkedTell(tell);


document.write('<br><br>');

document.write(`9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов. 
Курс «JS».
Функция должна возвращать true или false. Используйте регулярные
выражения.<br><br>`);


let regMail = /^[a-z]([A-z1-9\-\_]{0,})[^@+\-@\_@]@[^@@\-@\_@]([a-z]{2,11})\.([a-z]{2,11})/g;
let mail1 = prompt('Введите email blablabla@mail.bla', '1blablabla@mail.bla');

function checkedMail(mail) {
    (regMail.test(mail)) ? document.write(mail + ' Почта введен корректно'): document.write(mail + ' Почта введен не корректно');
}

checkedMail(mail1);


document.write('<br><br>');

document.write(`10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.<br><br>`);

let domenName = /(https|http):\/\/([A-z\.\-\_]{2,})\.([a-z]{2,5})/g;
let reg = /(\/[A-z0-9\-\/]+){1,}\?/g;
// let param = /(\/[A-z0-9\-\/]+){1,}\?/g;

let hash = /(\#[a-z1-9]+)/g;
let adress1 = prompt('Введите адреса', `https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3`);

function checkedAdres(adress) {
    let arr = [];
    arr.push(adress.match(domenName));
    arr.push(adress.match(reg));
    // arr.push(adress.match(param));
    arr.push(adress.match(hash));
    return arr;
}
for (let elem of checkedAdres(adress1)) {
    document.write(elem + '<br>')
}

/*
Регулярные выражения!
. - любой одиночный символ
[ ] - любой из них, диапазоны
$ - конец строки
^ - начало строки
\ - экранирование
\d - любую цифру
\D - все что угодно, кроме цифр
\s - пробелы
\S - все кроме пробелов
\w - буква
\W - все кроме букв
\b - граница слова
\B - не границ

Квантификация
n{4} - искать n подряд 4 раза
n{4,6} - искать n от 4 до 6
* от нуля и выше
+ от 1 и выше
? - нуль или 1 раз
*/
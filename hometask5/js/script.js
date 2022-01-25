let li = document.getElementsByClassName('menu-item');
let ul = document.querySelector('.menu');
let fifthElem = document.createElement('li');
let elem = ul.children[3];
let title = document.getElementById('title');
let column = document.querySelector('.column');
let adv = document.querySelector('.adv');
let opinion = document.getElementById('prompt');
fifthElem.classList.add('menu-item');
fifthElem.textContent='Пятый Элемент';
fifthElem.style.color="white";
ul.insertBefore(li[2],li[1]);  //Поменяли местами
ul.appendChild(fifthElem);
document.body.style.backgroundImage="url(img/apple_true.jpg)";
title.textContent="Мы продаем только подлинную технику Apple";
adv.remove();
let mind = prompt("Что вы думаете о технике Apple?");
opinion.textContent=mind;





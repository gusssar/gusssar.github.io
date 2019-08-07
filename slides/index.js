const data={
    "pic_0": {
        "href":'img/jpg/w2560/bulletin-board.jpg',
        "alt":"Доска объявлений",
        "data-path":"https://github.com/gusssar/bulletin-board",
        "title":"\"Доска объявлениий\" реализованное с помощью React.js"
    },
    "pic_1": {
        "href":"img/jpg/w2560/djino.jpg",
        "alt":"Промо-страница",
        "data-path":"https://github.com/gusssar/DjiniTestSecond",
        "title":"Промо-странца"
    },
    "pic_2": {
        "href":"img/jpg/w2560/table.jpg",
        "alt":"Табло Шереметьево",
        "data-path":"https://github.com/gusssar/table-air",
        "title":"Табло Шереметьево реализованное с помощью React.js"
    },
    "pic_3": {
        "href":"img/jpg/w2560/yandex_home.jpg",
        "alt":"Яндекс.Дом",
        "data-path":"https://github.com/gusssar/entrance_task_2",
        "title":"Макет страницы &quotЯндекс.Дом&quot"
    },
    "pic_4": {
        "href":"img/jpg/w2560/secret_page.jpg",
        "alt":"Личный проект",
        "data-path":"https://github.com/gusssar/bulletin-board",
        "title":"Постоянный личный проект, который я делаю в свое свободное время."
    },
    "pic_5": {
        "href":"img/jpg/w2560/next_page.jpg",
        "alt":"Дальше жарче",
        "data-path":"mailto:a.alexeev.mai@yandex.ru",
        "title":"Может я Вам смогу помочь с проектом, обязательно свяжитесь со мной"
    }
}
/**
 * TODO: Добавить цикличность при простое
 * добавить что бы первый элемент фокусился сразу
 * стили-стили
 * подумать над мобильной версией
 */
const img_wrap=document.getElementById('_img-preview');
const item=document.getElementsByClassName('item');

img_wrap.style.background="#f3f3f3 no-repeat center top";//вынести в css

/**Циклом навешиваем id для картинок
 * а также слушатели для фокус/блёр
 */
for (let i=0; i<item.length; i++){
    item[i].id="pic_"+i;
    item[i].addEventListener('mouseover',onFocus);
    item[i].addEventListener('mouseout',onBlur);
}
/** 
 * фокусом навешиваем класс
 * и выбираем картинку
 */
function onFocus(event){
    event.target.classList.add("item__focused");
    SetImage(event.target);
}
/** 
 * Блёром просто снимаем фокус
 * картинку не трогаем
 */
function onBlur(event){
    // el.target.style.color="black"
    event.target.classList.remove("item__focused");
}
/**
 * влупливаем превьюху
 * в зависимости от 
 * id сфокусированного эл-та
 */
function SetImage(el){
    let _bg = data[el.id].href;
    img_wrap.style.backgroundImage="url("+_bg+")"
}

// SetImage();
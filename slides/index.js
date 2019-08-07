const data={
    "pic_0": {
        "href":'img/jpg/w2560/bulletin-board.jpg',
        "alt":"Доска объявлений",
        "data_path":"https://github.com/gusssar/bulletin-board",
        "title":"\"Доска объявлениий\" реализованная с помощью React.js"
    },
    "pic_1": {
        "href":"img/jpg/w2560/djino.jpg",
        "alt":"Промо-страница",
        "data_path":"https://github.com/gusssar/DjiniTestSecond",
        "title":"Промо-странца"
    },
    "pic_2": {
        "href":"img/jpg/w2560/table.jpg",
        "alt":"Табло Шереметьево",
        "data_path":"https://github.com/gusssar/table-air",
        "title":"Табло Шереметьево реализованное с помощью React.js"
    },
    "pic_3": {
        "href":"img/jpg/w2560/yandex_home.jpg",
        "alt":"Яндекс.Дом",
        "data_path":"https://github.com/gusssar/entrance_task_2",
        "title":"Макет страницы &quotЯндекс.Дом&quot"
    },
    "pic_4": {
        "href":"img/jpg/w2560/secret_page.jpg",
        "alt":"Личный проект",
        "data_path":"https://github.com/gusssar",
        "title":"Постоянный личный проект, который я делаю в свое свободное время."
    },
    "pic_5": {
        "href":"img/jpg/w2560/next_page.jpg",
        "alt":"Дальше жарче",
        "data_path":"mailto:a.alexeev.mai@yandex.ru",
        "title":"Может я Вам смогу помочь с проектом, обязательно свяжитесь со мной"
    }
}
/**
 * TODO: Добавить цикличность при простое
 * стили-стили
 * подумать над мобильной версией
 */
const img_wrap=document.getElementById('_img-preview');
const item=document.getElementsByClassName('item');
/**
 * выставляем дефолтный фокус на первый элемент
 */
item[0].classList.add("item__focused");

/**Циклом навешиваем id для картинок
 * а также слушатели для фокус/блёр
 */
for (let i=0; i<item.length; i++){
    item[i].id="pic_"+i;
    item[i].innerHTML=data[item[i].id].alt;
    item[i].addEventListener('mouseover',onFocus);
    item[i].addEventListener('mouseout',onBlur);
}
/** 
 * очищаем все фокусы
 * фокусом навешиваем класс
 * и выбираем картинку
 */
function onFocus(event){
    for (let i=0; i<item.length; i++){
        item[i].classList.remove("item__focused");
    }
    event.target.classList.add("item__focused");
    SetImage(event.target);
    onOpenPopUp(event.target);
}
/** 
 * Блёром снимаем фокус
 * если фокусим на item
 * картинку не трогаем
 */
function onBlur(event){
    if(event.relatedTarget.classList[0]==='item'){
        event.target.classList.remove("item__focused");
        //убираем сабскрайб при разблёре
    }
    document.getElementsByClassName('item__subscribe')[0].remove();
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

/**
 * заполняем попап
 */
function onOpenPopUp(el){
    let _node = data[el.id];
    //обёртка для попапа
    let _ul = document.createElement("ul");
    _ul.classList.add('item__subscribe');
    //заполняем объяснения
    let _li_sub = document.createElement("li");
        _li_sub.innerHTML=_node.title;
    //заполняем ссылки
    let _li_link = document.createElement("li");
    _ul.appendChild(_li_sub);
    _ul.appendChild(_li_link);

    el.appendChild(_ul);

}

/**
 * вешаем ссылки на превьюхи
 * а также слушателя клика
 */
img_wrap.addEventListener('click',onClickPreview);
function onClickPreview(){
    let _id = document.getElementsByClassName("item__focused")[0].id;
    window.location=data[_id].data_path;
}
let show_menu = document.getElementById('showMenu');
let close_menu = document.getElementById('closeMenu');
let header = document.getElementsByTagName("header");

show_menu.onclick =  () => {
    header[0].style.display = 'block';
    show_menu.style.display = "none";
};

close_menu.onclick = () => {
    header[0].style.display = 'none';
    show_menu.style.display = "block";
};

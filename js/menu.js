let show_menu = document.getElementById('showMenu');
let close_menu = document.getElementById('closeMenu');
let header = document.getElementsByTagName("header");
let fake_glass = document.getElementById('fake-glass');
let nav_hello    = document.getElementById('id-nav-hello-1');
let nav_intro = document.getElementById('id-nav-intro-1');
let nav_skills   = document.getElementById('id-nav-skills-1');
let nav_works   = document.getElementById('id-nav-works-1');
let nav_about = document.getElementById('id-nav-about-1');
let nav_contact = document.getElementById('id-nav-contact-1');

let hide_menu = () => {
    header[0].style.display = 'none';
    show_menu.style.display = "block";
    fake_glass.style.display = 'none'
};

show_menu.onclick =  () => {
    header[0].style.display = 'block';
    show_menu.style.display = "none";
    fake_glass.style.display = 'block'
};

close_menu.onclick = () => {hide_menu()};
nav_hello.onclick = () => {hide_menu()};
nav_intro.onclick = () => {hide_menu()};
nav_skills.onclick = () => {hide_menu()};
nav_works.onclick = () => {hide_menu()};
nav_about.onclick = () => {hide_menu()};
nav_contact.onclick = () => {hide_menu()};
fake_glass.onclick = () => {hide_menu()};
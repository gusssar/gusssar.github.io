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
// let _content_body = document.getElementById('content-body');

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

let a;
if (navigator.userAgent.search(/Safari/) > 0) {a = 'Safari'};
if (navigator.userAgent.search(/Firefox/) > 0) {a = 'MozillaFirefox'};
if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {a = 'Internet Explorer'};
if (navigator.userAgent.search(/Chrome/) > 0) {a = 'Google Chrome'};
if (navigator.userAgent.search(/YaBrowser/) > 0) {a = 'Яндекс браузер'};
if (navigator.userAgent.search(/OPR/) > 0) {a = 'Opera'};
if (navigator.userAgent.search(/Konqueror/) > 0) {a = 'Konqueror'};
if (navigator.userAgent.search(/Iceweasel/) > 0) {a = 'Debian Iceweasel'};
if (navigator.userAgent.search(/SeaMonkey/) > 0) {a = 'SeaMonkey'};
if (navigator.userAgent.search(/Edge/) > 0) {a = 'Microsoft Edge'};
console.log(a);

close_menu.onclick = () => {hide_menu()};
nav_hello.onclick = () => {hide_menu()};
nav_intro.onclick = () => {hide_menu()};
nav_skills.onclick = () => {hide_menu()};
nav_works.onclick = () => {hide_menu()};
nav_about.onclick = () => {hide_menu()};
nav_contact.onclick = () => {hide_menu()};
fake_glass.onclick = () => {hide_menu()};
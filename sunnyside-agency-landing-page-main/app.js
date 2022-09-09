const humburger=document.querySelector('.hamburger');
const navmenu= document.querySelector('.navbar');
humburger.addEventListener('click',mobilemenu)
function mobilemenu(){
    humburger.classList.toggle('active');
    navmenu.classList.toggle('active');}
const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-menu');

menuIcon.addEventListener('click', ()=>{
    navBar.classList.toggle("clicked");
})

window.addEventListener('click', e=>{
    if (navBar.classList.contains('clicked') && e.target != navBar && e.target != menuIcon){
        navBar.classList.toggle("clicked");
    }
})
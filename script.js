let menu = document.querySelector('#menu-bars');
let bar = document.querySelector('.navbar');
let navbar = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    bar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
}
window.onscroll = () =>{
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navbar.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*="' + id + '"]').classList.add('active');
            });
        };
    });
};
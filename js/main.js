//create variable
const menu = document.querySelector('#mobile-menu');
const menu_links = document.querySelector('.navbar__menu');
const commitee = document.querySelector('#btnCommitees');

// action of menue icon
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
});

// redirect commitee page
commitee.addEventListener('click', () =>{
    window.location.href = '../committee.html';
});
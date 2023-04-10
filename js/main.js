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

// time count
const time_count = () => {
    const count = new Date("April 20, 2023 08:00:00").getTime();
    const now = new Date().getTime();
    const gap = count - now;

    const sec = 1000;
    const min = sec * 60;
    const hour =  min * 60;
    const day = hour * 24;

    // calculatinga
    const txtDay = Math.floor(gap / day);
    const txtHour = Math.floor((gap % day) / hour);
    const txtMin = Math.floor((gap % hour) / min);
    const txtSec = Math.floor((gap % min) / sec);

    document.querySelector(".day").innerText = txtDay;
    document.querySelector(".hour").innerText = txtHour;
    document.querySelector(".minute").innerText = txtMin;
    document.querySelector(".second").innerText = txtSec;
}

setInterval(time_count, 1000);
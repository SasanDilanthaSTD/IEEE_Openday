//create variable
const menu = document.querySelector('#mobile-menu');
const menu_links = document.querySelector('.navbar__menu');
const commitee = document.querySelector('#btnCommitees');
const about = document.querySelector('#btnAbout');

// action of menue icon
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu_links.classList.toggle('active');
});

// redirect commitee page
commitee.addEventListener('click', () =>{
    window.location.href = '../committee.html';
});

//redirect about page
about.addEventListener('click', () =>{
    window.location.href = '../about.html';
});

// time count
const time_count = () => {
    const count = new Date("May 28, 2023 08:00:00").getTime();
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



// import json animation
/* 1st content */
insertSvg('mainAni','/js/ani-3.json','main animation');
/* 2nd content */
insertSvg('animation','/js/ani-1.json','walk animation');
/* mail */
insertSvg('mail','/js/email-icon.json','mail');
/* linkedin */
insertSvg('linkedin','/js/linkedin-icon.json','linkedin');
/* facebook */
insertSvg('facebook','/js/facebook-icon.json','facebook');
/* instergram */
insertSvg('instergream','/js/instagram-icon.json','instergram');
/* twiter */
insertSvg('twitter','/js/twitter-icon.json','twitter-icon');
/* Success */

insertSvg('setimg','/js/successfully.json','success');


// create animation function
function insertSvg(idName, imgPath, imgTopic){
    let animation   = bodymovin.loadAnimation({
        container: document.getElementById(idName),
        path:imgPath,
        render: 'svg',
        loop: true,
        autoplay: true,
        name: imgTopic
    });
}

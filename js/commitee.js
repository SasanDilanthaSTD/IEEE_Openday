const commitee_2023 = document.querySelector('#btnCommitee_2023')

VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400,
    glare: true,
});


// redirect commitee-2023 page
commitee_2023.addEventListener('click', () =>{
    window.location.href = '../committee_2023.html';
});
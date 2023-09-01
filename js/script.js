let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<=height+offset){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector("header nav a[href*="+id+"]").classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    // reset:true,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, about-content', { origin: 'right'});


const typed = new Typed('.multiple-text', {
    strings:['Final Year CSE Student','Full Stack Developer','AI/ML Developer', 'Coding Lover'],
    typeSpeed:100,
    backSpeed:100,
    backdelay:1000,
    loop: true

});

const toggleBtn = document.getElementById('toggle-theme-btn');
const body = document.querySelector('body');
const homeImg = document.getElementById('homeImg');
const aboutImg = document.getElementById('aboutImg');

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>'; // replace with your sun icon
        homeImg.src = 'images/home-light.png';
        aboutImg.src = 'images/about-light.png';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // replace with your moon icon
        homeImg.src = 'images/home.png';
        aboutImg.src = 'images/about.png';
    }
});


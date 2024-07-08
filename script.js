/*-------------toggel icon navbar------------*/
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

/*-------------scroll section active link------------*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};


/*-------------sticky navbar------------*/
let header=document.querySelector("header");
header.classList.toggle("sticky",window.scrollY>100);

/*-------------remove toggle icon and navbar when click navbar link (scroll)------------*/
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");

/*-------------scroll reveal------------*/
ScrollReveal({
   distance:"80px",
   duration:2000,
   delay:200,
});

ScrollReveal().reveal(".home-content, .heading",{origin:"top"});
ScrollReveal().reveal(".home-img , .services-container, .portfolio-box, .contact form",{origin:"bottom"});
ScrollReveal().reveal(".home-content h1, .about-img, .opportunities-text-content",{origin:"left"});
ScrollReveal().reveal(".home-content p, .about-content",{origin:"right"});


/*-------------typed js------------*/
const typed = new Typed('.typescript-text',{
    strings:["Web Designer","Full-Stack Developer","Computer Engineer","Machine Learning Engineer"],
    typeSpeed:70,
    backDelay:100,
    loop:true,
});

/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.toggle('show')
            })
        }
}
showMenu('nav-toggle','nav-menu') ; 

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   
const navLinkMob = document.querySelectorAll('.nav__link__mob');

function linkAction(){
  /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        navLinkMob.forEach(n => n.classList.remove('active'));
        
        this.classList.add('active');
        
        /*Remove menu mobile*/
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
navLinkMob.forEach(n => n.addEventListener('click', linkAction));


//To land at the perfect position when clicking nav links
const nav = document.querySelector('.nav');
const contact_btn = document.querySelector(".contact-btn");
navLink.forEach(nl => nl.addEventListener('click', perfScroll)) ;
navLinkMob.forEach(nl => nl.addEventListener('click', perfScroll)) ;
contact_btn.addEventListener('click', perfScroll);

function perfScroll(e){
         
        //prevent the action to be performed
        e.preventDefault();

        // used slice(0) to remove the "#" from the attribute
        const id = e.currentTarget.getAttribute("href").slice(1);
        //console.log(id)  prints '#tours','#serivces' etc and after doing slice(1) we get 'services','tours' etc
        const element = document.getElementById(id);
        
        //console.log(position); it will show to postion height of perticular link
        // const navHeader = document.querySelector(".nav-header");
        const navHeight = nav.getBoundingClientRect().height;
        let correctPosition = element.offsetTop - navHeight;
        
        // console.log(navHeight);  

        window.scrollTo({
            left:0,
            top:correctPosition,
        });
}

window.addEventListener("scroll",function(){
    const l__header = document.querySelector(".l-header");
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const nav__links = document.querySelectorAll(".nav__link");
    const nav__logo = document.querySelector(".nav__logo");
    const scrollHeight = window.pageYOffset;

    
    if(scrollHeight > 190){
        l__header.style.backgroundColor = "white" ;
        nav__logo.style.color = "#0E2431" ;
        navToggle.style.color = "#0E2431" ;
        l__header.style.boxShadow= "0 1px 4px rgba(146, 161, 176, 0.288)";
           
        
        nav__links.forEach(function(nav__link){
            nav__link.style.color = "#0E2431" ;  
        })
        
    }
    else{
        l__header.style.backgroundColor = "transparent" ;
        nav__logo.style.color = "white" ;
        navToggle.style.color = "white" ; 
        l__header.style.boxShadow= "none";

        nav__links.forEach(function(nav__link){
            nav__link.style.color = "white" ;  
        })
        
    }
});

// form submission
const formBtn = document.querySelector(".contact__button");
formBtn.addEventListener("click",function(){
    alert("Success!");
});


//Update age every year according to he birthyear
document.getElementById('my__age').innerHTML = new Date().getFullYear() - 2002;


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 1100,
    reset: false,
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 300}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 00}); 
sr.reveal('.about__text',{delay: 00}); 
sr.reveal('.about__more',{delay: 100}); 
sr.reveal('.about__icon',{interval: 250});
sr.reveal('.resume__download',{delay: 220});

/*SCROLL EDUCATION*/
sr.reveal('.resume-item',{interval: 250});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__details h2',{delay: 160});
sr.reveal('.contact__tool',{interval: 200});
sr.reveal('.contact__input',{interval: 200}); 




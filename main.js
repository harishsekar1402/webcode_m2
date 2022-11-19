
  AOS.init();

const menuBtn = document.querySelector('.menu');
let menuOpen = false;
menuBtn.addEventListener('click',() =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
//toggle//
let button = document.querySelector(".menu"),
    links = document.querySelector(".nav-links");

    button.addEventListener("click",() =>{
        links.classList.toggle("display");
    });
// ===============================
// KeshaAmrit Landing Page Script
// ===============================

// ---------- IMAGE SLIDER ----------

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let sliderTimer = null;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}

function startSlider(){

    sliderTimer = setInterval(nextSlide,3000);

}

function stopSlider(){

    clearInterval(sliderTimer);

}

if(slides.length){

    showSlide(0);

    startSlider();

}

if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        nextSlide();

        stopSlider();

        startSlider();

    });

}

if(prevBtn){

    prevBtn.addEventListener("click",()=>{

        prevSlide();

        stopSlider();

        startSlider();

    });

}

// ---------- SMOOTH SCROLL ----------

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ---------- REVEAL ANIMATION ----------

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".benefit-card,.ingredient-card,.price-card").forEach(card=>{

    observer.observe(card);

});

// ---------- STICKY BAR SHADOW ----------

window.addEventListener("scroll",()=>{

    const sticky = document.querySelector(".sticky-buy");

    if(!sticky) return;

    if(window.scrollY > 100){

        sticky.style.boxShadow="0 -10px 30px rgba(0,0,0,.25)";

    }else{

        sticky.style.boxShadow="0 -8px 20px rgba(0,0,0,.12)";

    }

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

topBtn.style.display=
window.scrollY>500?"block":"none";

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

const orders = document.getElementById("orders");

if (orders) {

    let count = 27;

    setInterval(() => {

        count++;

        if (count > 43) {
            count = 27;
        }

        orders.textContent = count;

    }, 45000);
}
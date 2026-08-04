// ============================
// MediChoice Pharmacy
// script.js
// ============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky header shadow
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
    }

});

// Fade animation
const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(
".category,.service-card,.product,.testimonial,.about"
).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// Back to Top Button

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.className="top-btn";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// Footer Year

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML = `© ${year} MediChoice Pharmacy. All Rights Reserved.`;

}

console.log("MediChoice Pharmacy Website Loaded Successfully"); you for choosing MediChoice Pharmacy!');

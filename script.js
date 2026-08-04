/*====================================
MEDICHOICE PHARMACY
script.js - PART 3A
====================================*/

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Smooth Scroll
    =========================*/

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", e => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            e.preventDefault();

            const target = document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth",
                    block: "start"

                });

            }

        });

    });

    /*=========================
      Sticky Header
    =========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    /*=========================
      Active Navigation
    =========================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                current &&
                link.getAttribute("href") === "#" + current
            ) {

                link.classList.add("active");

            }

        });

    });

    /*=========================
      Mobile Menu
    =========================*/

    const menuButton = document.querySelector(".menu-toggle");

    const nav = document.querySelector("nav ul");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("show-menu");

        });

    }

});    entries.forEach(entry=>{

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



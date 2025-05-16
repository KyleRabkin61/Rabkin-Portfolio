const vue_app = Vue.createApp({
    data() {
        return {
            skills: [],
            websites: []
        };
    },
    created() {
        Promise.all([
            fetch('skills.json').then(response => response.json()),
            fetch('websites.json').then(response => response.json())
        ])
        .then(([skillData, websiteData]) => {
            this.skills = skillData;
            this.websites = websiteData;
        })
        .catch(error => console.error("Error fetching data:", error));
    }
});

vue_app.mount("#vue_app");

let header = document.querySelector(".header");
let height = parseInt(getComputedStyle(header).height, 10);
let nav = document.querySelector(".navbar");
let navHeight = parseInt(getComputedStyle(nav).height, 10);

// Add scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > height - (height * 0.8)) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
    // Update navbar height dynamically
    if (nav) {
        navHeight = parseInt(getComputedStyle(nav).height, 10);
    }
});

// Button on scroll function that does not cut off div
function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = navHeight;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
    });
}

// Navbar collapses on click
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                if (typeof bootstrap !== "undefined") {
                    new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                }
            }
        });
    });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from('.circle-shape', {
    scale: 0.5,
    background: '#252525',
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})

gsap.from('.block-1', {
    x: '-11vw',
    y: '-9vw',
    scale: "4.4",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})
gsap.from('.block-2', {
    x: '15vw',
    y: '14.5vw',
    scale: "3.1",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})
gsap.from('.block-3', {
    x: "11vw",
    y: "-9vw",
    scale: "3.3",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})
gsap.from('.block-4', {
    x: "-11vw",
    y: "10vw",
    scale: "2.4",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})
gsap.from('.block-5', {
    x: "-2vw",
    y: "-16vw",
    scale: "2.4",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})
gsap.from('.block-6', {
    x: "-2vw",
    y: "15vw",
    scale: "2.4",
    opacity: 0.5,
    ease: 'power1.inOut',
    duration: 2,
    delay: 0.5
})

gsap.to(['.navbar', '.explore', '.header-job'], {
    duration: 1.5,
    delay: 2.5,
    opacity: 1
})

gsap.from(['about-title', '.about-text', '.about-img'], {
    y: 100,
    duration: 2,
    opacity: 0,
    scrollTrigger: ".about-text",
})
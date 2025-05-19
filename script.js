// vue that loads in skills and websites

const vue_app = Vue.createApp({
    data() {
        return {
            langs: [],
            libraries: [],
            websites: []
        };
    },
    created() {
        Promise.all([
            fetch('langs.json').then(response => response.json()),
            fetch('libraries.json').then(response => response.json()),
            fetch('websites.json').then(response => response.json())
        ])
            .then(([langData, libraryData, websiteData]) => {
                this.langs = langData;
                this.libraries = libraryData
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

// contact js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

window.onload = function () {
    document.getElementsByClassName('input-container').textContent = ''
};

function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById("contactForm");
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Message sent!");
        form.reset(); // Reset the form fields
      } else {
        alert("There was a problem sending your message.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    });
  }


// gsap animations

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
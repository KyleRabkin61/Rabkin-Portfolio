// let nav = document.querySelector(".navbar");
// let navHeight = parseInt(getComputedStyle(nav).height, 10);

// // Add scroll event listener
// window.addEventListener("scroll", () => {
//     if (window.scrollY > height - (height * 0.8)) {
//         nav.classList.add("navbar-scrolled");
//     } else {
//         nav.classList.remove("navbar-scrolled");
//     }
//     // Update navbar height dynamically
//     if (nav) {
//         navHeight = parseInt(getComputedStyle(nav).height, 10);
//     }
// });

// // Button on scroll function that does not cut off div
// function scrollToSection(id) {
//     const element = document.getElementById(id);
//     const offset = navHeight;
//     const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//     window.scrollTo({
//         top: elementPosition - offset,
//         behavior: "smooth"
//     });
// }

// // Navbar collapses on click
// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const navbarCollapse = document.querySelector(".navbar-collapse");

//     navLinks.forEach(link => {
//         link.addEventListener("click", function () {
//             if (navbarCollapse.classList.contains("show")) {
//                 if (typeof bootstrap !== "undefined") {
//                     new bootstrap.Collapse(navbarCollapse, {
//                         toggle: true
//                     });
//                 }
//             }
//         });
//     });
// });
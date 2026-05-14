//  function toggleTheme(){
//       document.body.classList.toggle("dark-mode");
//       const themeBtn = document.querySelector(".theme-btn");
//       themeBtn.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "☾";
//     }

//     function toggleRTL(){
//       document.body.classList.toggle("rtl-mode");
//     }

//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links");
//     const navbar = document.querySelector(".navbar");
//     const navAnchors = document.querySelectorAll(".nav-links a");

//     menuToggle.addEventListener("click", () => {
//       navLinks.classList.toggle("show");
//       menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
//     });

//     navAnchors.forEach(link => {
//       link.addEventListener("click", () => {
//         navLinks.classList.remove("show");
//         menuToggle.textContent = "☰";
//       });
//     });

//     window.addEventListener("scroll", () => {
//       navbar.classList.toggle("scrolled", window.scrollY > 40);
//     });

//     const reveals = document.querySelectorAll(".reveal");

//     function revealOnScroll(){
//       reveals.forEach(item => {
//         const top = item.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if(top < windowHeight - 80){
//           item.classList.add("active");
//         }
//       });
//     }

//     window.addEventListener("scroll", revealOnScroll);
//     window.addEventListener("load", revealOnScroll);
//     const mobileDropdown = document.querySelector(".mobile-dropdown");

// const mobileDropdownToggle =
//   document.querySelector(".mobile-dropdown-toggle");

// mobileDropdownToggle.addEventListener("click", () => {

//   mobileDropdown.classList.toggle("active");

// });
// const menuToggle = document.querySelector(".menu-toggle");
// const mobileMenu = document.querySelector(".mobile-menu");

// menuToggle.addEventListener("click", () => {

//   mobileMenu.classList.toggle("active");

//   if(mobileMenu.classList.contains("active")){
//     menuToggle.innerHTML = "✕";
//   }else{
//     menuToggle.innerHTML = "☰";
//   }

// });
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});


/* MOBILE DROPDOWN */

const mobileDropdown = document.querySelector(".mobile-dropdown");

const mobileDropdownToggle =
document.querySelector(".mobile-dropdown-toggle");

mobileDropdownToggle.addEventListener("click", () => {

  mobileDropdown.classList.toggle("active");

});


/* THEME */

function toggleTheme(){

  document.body.classList.toggle("dark-mode");

  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.innerHTML =
  document.body.classList.contains("dark-mode")
  ? "☀"
  : "☾";
}


/* RTL */

function toggleRTL(){
  document.body.classList.toggle("rtl-mode");
}


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});


/* REVEAL */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){

  reveals.forEach(item => {

    const top = item.getBoundingClientRect().top;

    if(top < window.innerHeight - 80){
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
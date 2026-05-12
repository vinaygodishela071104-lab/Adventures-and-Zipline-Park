 function toggleTheme(){
      document.body.classList.toggle("dark-mode");
      const themeBtn = document.querySelector(".theme-btn");
      themeBtn.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "☾";
    }

    function toggleRTL(){
      document.body.classList.toggle("rtl-mode");
    }

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navbar = document.querySelector(".navbar");
    const navAnchors = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuToggle.textContent = navLinks.classList.contains("show") ? "✕" : "☰";
    });

    navAnchors.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
      });
    });

    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    });

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll(){
      reveals.forEach(item => {
        const top = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if(top < windowHeight - 80){
          item.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", revealOnScroll);
    window.addEventListener("load", revealOnScroll);
    
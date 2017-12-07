 window.onload = function () {
   var preload = document.querySelector(".preload");

   setTimeout(function () {
      preload.classList.add("done");
   }, 4000);

     var mobMenu = document.querySelector(".nav-mob-toggle");
     var mobMenuContainer = document.querySelector(".mobile-menu-conteiner");
     var burgerMenu = document.querySelector(".burger-menu");
    mobMenu.onclick = function () {
        mobMenuContainer.classList.toggle("active");
        burgerMenu.classList.toggle("open");
    }

 };
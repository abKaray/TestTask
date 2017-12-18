 window.onload = function () {
   var preload = document.querySelector(".preload");

   setTimeout(function () {
      preload.classList.add("done");
   }, 4000);
    var topMenu = document.querySelector(".top-profile-link");
    topMenu.onclick = function () {
      var dropMenu = document.querySelector(".top-profile-menu");
      if(dropMenu.style.display == "block"){
          dropMenu.style.display = "none";
      } else{
          dropMenu.style.display = "block";
      }
    };
     var mobMenu = document.querySelector(".nav-mob-toggle");
     var mobMenuContainer = document.querySelector(".mobile-menu-conteiner");
     var burgerMenu = document.querySelector(".burger-menu");
    mobMenu.onclick = function () {
        mobMenuContainer.classList.toggle("active");
        burgerMenu.classList.toggle("open");
    }
    //Tabs click event
    var tabs = document.querySelector(".tabs");
    tabs.onclick = function (e) {
        var target = e.target;
        var allTabs = document.getElementsByClassName("tab");
        var allContent = document.getElementsByClassName("tab-inner-content");
        var finish = document.getElementById("finish");
        var cancel = document.getElementById("cancel");
        while(target != tabs){
            if(target.tagName == "LI"){
                target.classList.remove("active");
                console.log(target);
                for(var i = 0; i < allTabs.length; i++){
                    allTabs[i].classList.remove("active");
                }
                for(var i = 0; i < allContent.length; i++){
                    allContent[i].style.display = "none";
                    if(target.id == "finished"){
                        finish.style.display = "block";
                        target.classList.add("active");
                    }
                    if(target.id == "canceled"){
                        cancel.style.display = "block";
                        target.classList.add("active");
                    }
                    if(target.id == "recent"){
                        allContent[i].style.display = "block";
                        target.classList.add("active");
                    }
                }
                return;
            }
            target = target.parentNode;
        }
    };
    // End tabs click event
 };

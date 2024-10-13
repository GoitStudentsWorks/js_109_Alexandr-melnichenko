//   Dark mode

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
})

// Mobile menu

const menu = document.querySelector(".menu-header");
const menuItems = document.querySelectorAll(".menuItem-header");
const hamburger= document.querySelector(".btn-menu");
const closeIcon= document.querySelector(".btn-close-icon");
const menuIcon = document.querySelector(".btn-menu-icon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)
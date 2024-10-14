//   Dark mode

let checkbox = document.querySelector('#chk');
let body = document.querySelector('body');

let localStorageTheme = localStorage.getItem('theme');

const setThemeColor = () => {
  localStorageTheme === 'dark' ? setDarkMode() : setLightMode();
}

const checkModeSetting = () => {
  window.matchMedia('prefers-color-scheme: dark').addEventListener('change', () => {
    checkThemeChange();
  });
}

const  checkThemeChange = () => {
  if(localStorageTheme == null && window.matchMedia('prefers-color-scheme: dark').matches) {
    setDarkMode();
  } else if (localStorageTheme && window.matchMedia('prefers-color-scheme: dark').matches) {
    setDarkMode();
  } else {
    setLightMode();
  }
  }

const setDarkMode = () => {
body.classList = "dark";
localStorage.setItem('theme', 'dark');
checkbox.checked = true;
}

const setLightMode = () => {
body.classList = "light";
localStorage.setItem('theme', 'light');
checkbox.checked = false;
}

checkModeSetting();
checkThemeChange();
setThemeColor();

checkbox.addEventListener('click', () => checkbox.checked ? setDarkMode() : setLightMode());




// Mobile menu

const menu = document.querySelector(".mobile-menu-header");
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
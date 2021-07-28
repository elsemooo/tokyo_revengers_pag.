const menu = document.querySelector("#menuToggle");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
function toggleMenu(){
    menu.classList.toggle("active");
}
openMenu.addEventListener("click",toggleMenu);
closeMenu.addEventListener("click",toggleMenu);

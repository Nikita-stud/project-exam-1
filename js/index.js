const header = document.querySelector(".header");
const logoText = document.querySelector(".logo_text");

function handleScroll(){
  const scrolledY = window.scrollY;

  if(scrolledY > 55){
    header.classList.add("scrolled");
    logoText.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
    logoText.classList.remove("scrolled");
  }
};
window.addEventListener("scroll", handleScroll);





const nav = document.getElementById("header_nav");
const screenWidth = window.matchMedia('(min-width: 834px)')

function handleWidth(screenWidth){
  if(screenWidth.matches){
    nav.style.display = "none";
    hamburger.style.display ="none"
  }else{
    nav.style.display = "block";
    hamburger.style.display ="block"
  }
}
screenWidth.addEventListener("change", handleWidth);



const navItem = document.querySelectorAll(".navItem");
const hamburger = document.querySelector(".hamburger");
const closedIcon = document.querySelector(".icon-close");
const hamburgerIcon = document.querySelector(".icon-hamburger")

function toggleHamburger(){
  if(nav.classList.contains("showMenu")){
    nav.classList.remove("showMenu");
    closedIcon.style.display ="none";
    hamburgerIcon.style.display = "block"
  }else{
    nav.classList.add("showMenu");
    closedIcon.style.display ="block";
    hamburgerIcon.style.display = "none"
  }
}
hamburger.addEventListener("click", toggleHamburger);

navItem.forEach(
  function(item){
    item.addEventListener("click",toggleHamburger);
  }
)

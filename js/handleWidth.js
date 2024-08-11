const logo = document.getElementById("logo");
const nav = document.getElementById("header_nav");
const hamburger = document.querySelector(".hamburger");

export function handleWidth(screenWidth){
  if(screenWidth.matches){
    nav.style.display = "none";
    hamburger.style.display ="none"
    logo.src = "pictures/logo-desktop.png"
  }else{
    nav.style.display = "block";
    hamburger.style.display ="block"
    logo.src = "pictures/logo-mobile.png"
  }
}
const logoHeader = document.getElementById("logo-header");
const logoFooter = document.getElementById("logo-footer");
const nav = document.getElementById("header_nav");
const hamburger = document.querySelector(".hamburger");

export function handleWidth(screenWidth){
  if(screenWidth.matches){
    nav.style.display = "none";
    hamburger.style.display ="none"
    logoHeader.src = "pictures/logo-desktop.png";
    logoFooter.src = "pictures/logo-desktop.png";

  }else{
    nav.style.display = "block";
    hamburger.style.display ="block"
    logoHeader.src = "pictures/logo-mobile.png";
    logoFooter.src = "pictures/logo-mobile.png";
  }
}
const logos = document.querySelectorAll("#logo");
const nav = document.getElementById("header_nav");
const hamburger = document.querySelector(".hamburger");

export function handleWidth(screenWidth){
  if(screenWidth.matches){
    nav.style.display = "none";
    hamburger.style.display ="none"
    
    for(let i= 0; i<logos.length; i++){
      logos[i].src = "pictures/logo-desktop.png";
    }

  }else{
    nav.style.display = "block";
    hamburger.style.display ="block"

    for(let i= 0; i<logos.length; i++){
      logos[i].src = "pictures/logo-mobile.png";
    }
  }
}
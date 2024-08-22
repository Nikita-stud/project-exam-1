const header = document.querySelector(".header");
const logoText = document.querySelector(".logo_text");
const nav = document.getElementById("header_nav");

export function handleScroll(){
  const scrolledY = window.scrollY;

  if(scrolledY > 55){
    header.classList.add("scrolled");
    logoText.classList.add("scrolled");
    nav.classList.add("scrolled")
  }else{
    header.classList.remove("scrolled");
    logoText.classList.remove("scrolled");
    nav.classList.remove("scrolled")
  }
};
const header = document.querySelector("header");
const logoText = document.querySelector(".logo_text");

export function handleScroll(){
  const scrolledY = window.scrollY;

  if(scrolledY > 55){
    header.classList.add("scrolled");
    logoText.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
    logoText.classList.remove("scrolled");
  }
};
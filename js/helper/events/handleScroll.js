const header = document.querySelector("header");

export function handleScroll(){
  const scrolledY = window.scrollY;

  if(scrolledY > 55){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
};
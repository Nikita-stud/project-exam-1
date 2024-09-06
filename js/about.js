import { catchAndDisplay } from "./ui/catchAndDisplay.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";

async function index(){
  try{
    window.addEventListener("scroll", handleScroll);
    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth)
    if(window.innerWidth > 834){
      handleWidth(screenWidth)
    }
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);

  }catch(error){
    catchAndDisplay()
  }
};

index();
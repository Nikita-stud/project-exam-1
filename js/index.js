import { handleScroll } from "./handleScroll.js";
import { handleWidth } from "./handleWidth.js";
import { toggleHamburger } from "./toggleHamburger.js";

function index(){
  try{
    window.addEventListener("scroll", handleScroll);

    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);
    
  }catch(error){

  }
};

index();


/*------ hamburger,logo  and nav are intertwined in these functions below----*/ 







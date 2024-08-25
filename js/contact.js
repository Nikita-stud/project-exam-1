import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { handleSubmitForm } from "./helper/events/handleSubmitForm.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";

async function index(){
  try{
    window.addEventListener("scroll", handleScroll);

    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);

    handleSubmitForm();

  }catch(error){
    catchAndDisplay()
  }
};

index();
import { url } from "./constants/constant.js";

import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { fetchPostOfToday } from "./api/fetchPostOfToday.js";
import { fetchMainPagePosts } from "./api/fetchMainPagePosts.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";
import { fetchCarousel } from "./api/fetchCarousel.js";
import { skeletonsIndexPage } from "./ui/skeletonsIndexPage.js";

async function index(){
  try{
    const fullLink = url + "&per_page=20";

    window.addEventListener("scroll", handleScroll);
    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);
    if(window.innerWidth > 834){
      handleWidth(screenWidth)
    }
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);
    
    skeletonsIndexPage()

    const fetched = await fetch(fullLink);
    const results = await fetched.json();
    const posts = results;

    fetchPostOfToday(posts);
    fetchCarousel(posts);
    fetchMainPagePosts(posts);


  }catch(error){
    catchAndDisplay()
  }
};

index();


/*------ hamburger,logo  and nav are intertwined in these functions below----*/ 







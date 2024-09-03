import { url } from "./constants/constant.js";
const fullLink = url + "&per_page=20";

import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { fetchTodaysPosts } from "./api/fetchTodaysPost.js";
import { fetchMainPagePosts } from "./api/fetchMainPagePosts.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";
import { fetchCarousel } from "./api/fetchCarousel.js";

async function index(){
  try{
    window.addEventListener("scroll", handleScroll);

    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);


    const fetched = await fetch(fullLink);
    const results = await fetched.json();
    const posts = results;

    fetchTodaysPosts(posts);
    fetchCarousel(posts);
    fetchMainPagePosts(posts);


  }catch(error){
    catchAndDisplay()
  }
};

index();


/*------ hamburger,logo  and nav are intertwined in these functions below----*/ 







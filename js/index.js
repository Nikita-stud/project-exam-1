import { url } from "./constants/constant.js";
import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { fetchTodaysPosts } from "./api/fetchTodaysPost.js";
// import { fetchPosts } from "./api/fetchPosts.js";

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


    const fetched = await fetch(url);
    const results = await fetched.json();
    const posts = results;
    
    //  console.dir(posts)

    fetchTodaysPosts(posts);
    fetchLatestPosts(posts);
    // fetchPosts(posts);


  }catch(error){
    catchAndDisplay()
  }
};

index();


/*------ hamburger,logo  and nav are intertwined in these functions below----*/ 







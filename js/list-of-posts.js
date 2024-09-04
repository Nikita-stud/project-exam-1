import { url } from "./constants/constant.js";
const newUrl = url.replace("/?_embed","?page=1")

import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { fetchListOfPosts } from "./api/fetchListOfPosts.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";
import { handlePostsForm } from "./helper/events/handlePostsForm.js";

async function displayListPage(){
  try{
    window.addEventListener("scroll", handleScroll);

    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);


    const fetched = await fetch(newUrl);
    const results = await fetched.json();
    const posts = results;
    
    handlePostsForm()
    fetchListOfPosts(posts)


  }catch(error){
    catchAndDisplay()
  }
};

displayListPage();
import { url } from "./constants/constant.js";
const newUrl = url + "&page=1";

import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { filterPosts } from "./helper/events/filterPosts.js";
import { fetchListOfPosts } from "./api/fetchListOfPosts.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";

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

    fetchListOfPosts(posts)

    filterPosts(posts, (filteredPosts) =>{
      fetchListOfPosts(filteredPosts)
    });


  }catch(error){
    catchAndDisplay()
  }
};

displayListPage();
import { url } from "./constants/constant.js";
const newUrl = url + "&page=1&per_page=10";
let addToUrl = newUrl;

import { catchAndDisplay } from "./ui/catchAndDisplay.js";
import { filterPosts } from "./helper/events/filterPosts.js";
import { fetchListOfPosts } from "./api/fetchListOfPosts.js";
import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";
import { skeletonsListPage } from "./ui/skeletonsListPage.js";
const loadMoreButton = document.getElementById("load-more-cta");

async function displayListPage(){
  try{
    window.addEventListener("scroll", handleScroll);
    const screenWidth = window.matchMedia('(min-width: 834px)')

    screenWidth.addEventListener("change", handleWidth)
    if(window.innerWidth > 834){
      handleWidth(screenWidth)
    }
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);

    skeletonsListPage();

    const fetched = await fetch(addToUrl);
    const results = await fetched.json();
    const posts = results;

    // loadMoreButton.style.display = posts.length < 10 ? "none" : "block";

    fetchListOfPosts(posts);
    filterPosts(posts, (filteredPosts) =>{
      fetchListOfPosts(filteredPosts);
    });


  }catch(error){
    catchAndDisplay();
  }
};
displayListPage();


async function loadMorePosts(){
  try{
    loadMoreButton.addEventListener("click",async()=>{
       let urlPostAmount = addToUrl.charAt(addToUrl.length-2) + addToUrl.charAt(addToUrl.length-1);
       let finalNumber = +urlPostAmount + +10;
       addToUrl = addToUrl.replace(`${urlPostAmount}`,`${finalNumber}`)

       const fetched = await fetch(addToUrl);
       const results = await fetched.json();
       const posts = results;

       loadMoreButton.style.display = posts.length < finalNumber ? "none" : "block";


      fetchListOfPosts(posts)
      filterPosts(posts, (filteredPosts) =>{
      fetchListOfPosts(filteredPosts)
    });
  });
  }catch(error){
    catchAndDisplay()
  }
}
loadMorePosts()
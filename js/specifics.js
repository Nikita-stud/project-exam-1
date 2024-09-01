import { url } from "./constants/constant.js";
import { getQueryParam } from "./helper/getQueryParam.js";
import { fetchSinglePost } from "./api/fetchSinglePost.js";

import { handleScroll } from "./helper/events/handleScroll.js";
import { handleWidth } from "./helper/events/handleWidth.js";
import { toggleHamburger } from "./helper/events/toggleHamburger.js";


async function displayPost(){

  const id = getQueryParam("id");
  const newUrl = url.replace("?_embed","")
  const postUrl = `${newUrl}/${id}?_embed`;
  
  if(!id){
    window.location.href="/";
  }

  try{
    window.addEventListener("scroll", handleScroll);

    const screenWidth = window.matchMedia('(min-width: 834px)')
    screenWidth.addEventListener("change", handleWidth);

    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleHamburger);

    const fetched = await fetch(postUrl);
    const results = await fetched.json();
    const post = results;

    fetchSinglePost(post);


  }catch(error){
    catchAndDisplay();
  }
}
displayPost();
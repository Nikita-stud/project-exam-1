const navItem = document.querySelectorAll(".navItem");
const nav = document.getElementById("header_nav");
const closedIcon = document.querySelector(".icon-close");
const hamburgerIcon = document.querySelector(".icon-hamburger")

export function toggleHamburger(){
  if(nav.classList.contains("showMenu")){
    nav.classList.remove("showMenu");
    closedIcon.style.display ="none";
    hamburgerIcon.style.display = "block"
  }else{
    nav.classList.add("showMenu");
    closedIcon.style.display ="block";
    hamburgerIcon.style.display = "none"
  }
}

navItem.forEach(
  function(item){
    item.addEventListener("click",toggleHamburger);
  }
)
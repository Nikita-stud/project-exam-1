const asiaContainer = document.getElementById("posts-main-page_container-asia");
const europeContainer = document.getElementById("posts-main-page_container-europe");
const skeletons = document.getElementById("list-of-posts_template");

export function skeletonsIndexPage(){
  for(let i= 0; i<6; i++){
  asiaContainer.append(skeletons.content.cloneNode(true));
  europeContainer.append(skeletons.content.cloneNode(true));
  }
}
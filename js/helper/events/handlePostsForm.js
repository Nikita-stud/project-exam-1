const lastPostsButton = document.getElementById("last-page-cta")
const search = document.getElementById("search");

export function handlePostsForm(){

  search.onkeyup = function(){
    const messageLength = event.target.value.trim().toLowerCase();
  }
}
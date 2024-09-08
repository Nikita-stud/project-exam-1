const container = document.getElementById("all-posts_container");
const skeletons = document.getElementById("list-of-posts_template");

export function skeletonsListPage(){
   for(let i= 0; i<10; i++){
   container.append(skeletons.content.cloneNode(true));
   }
}
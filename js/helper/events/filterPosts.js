const search = document.getElementById("search");

export function filterPosts(posts, callback){
  
  search.addEventListener("keyup", (event) =>{
    const messageLength = event.target.value.trim().toLowerCase();

    const filteredPosts = posts.filter(function(post){
      const filteredTitle = post.title.rendered.replace("&#8217", "")
      return filteredTitle.toLowerCase().startsWith(messageLength)
    });
    callback(filteredPosts);
  });
}
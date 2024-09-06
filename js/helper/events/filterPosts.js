const search = document.getElementById("search");
const newestToOldestButton = document.getElementById("newest-to-oldest");
const oldestToNewestButton = document.getElementById("oldest-to-newest");

export function filterPosts(posts, callback){
  let filteredPosts = posts;

  search.addEventListener("keyup", (event) =>{
    const messageLength = event.target.value.trim().toLowerCase();

    filteredPosts = posts.filter(function(post){
      const filteredTitle = post.title.rendered.replace("&#8217", "")
      return filteredTitle.toLowerCase().startsWith(messageLength)
    });
    if(newestToOldestButton.checked){
      filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }else if(oldestToNewestButton.checked){
      filteredPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    callback(filteredPosts);
  });


  newestToOldestButton.addEventListener("click",()=>{
    oldestToNewestButton.checked= false;
    if(filteredPosts.length > 0){
      filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
    callback(filteredPosts)
  });
  
  oldestToNewestButton.addEventListener("click",()=>{
    newestToOldestButton.checked= false;
    if(filteredPosts){
      filteredPosts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }
    callback(filteredPosts)
  });
  


}


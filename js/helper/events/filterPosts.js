const search = document.getElementById("search");
const newestToOldestButton = document.getElementById("newest-to-oldest");
const oldestToNewestButton = document.getElementById("oldest-to-newest");

export function filterPosts(posts, callback){
  const startNewestPosts = posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const startOldestPosts = posts.sort((b, a) => new Date(b.date).getTime() - new Date(a.date).getTime());

  
  search.addEventListener("keyup", (event) =>{
    const messageLength = event.target.value.trim().toLowerCase();

    const filteredPosts = posts.filter(function(post){
      const filteredTitle = post.title.rendered.replace("&#8217", "")
      return filteredTitle.toLowerCase().startsWith(messageLength)
    });
    callback(filteredPosts);
  });
}
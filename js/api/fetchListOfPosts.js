const container = document.getElementById("all-posts_container");
const loadMoreButton = document.getElementById("load-more-cta")

export function fetchListOfPosts(filteredPosts){
  container.innerHTML="";

  if(filteredPosts.length == 0){
    const container = document.getElementById("all-posts_container");
     container.innerHTML = `<div class="nothing-found_container">
                              <p>Please ensure that you type in the first letter of a post for best results!</p>
                           </div>`;
    loadMoreButton.style.display = filteredPosts.length < 10 ? "none" : "block";
   }

  filteredPosts.forEach(post => {
    const anchorTag = document.createElement("a");
    anchorTag.href =`specifics.html?id=${post.id}`;

    const div = document.createElement("div");
    div.classList.add("post_container");

    const img = document.createElement("img");
    img.classList.add("post_img");
    const mediaImg = post.media[0];
    img.src = `${mediaImg.url}`;
    img.alt = `${mediaImg.alt}`;

    const title = document.createElement("h5");
    title.classList.add("post_title")
    const renderedTitle = post.name
    title.innerText = renderedTitle;

    const p = document.createElement("p");
    p.classList.add("post_text")
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = post.description;
    const allText = tempContainer.querySelectorAll("p")
    let paragraphs = "";
  
    allText.forEach(paragraph => {
      paragraphs += paragraph.innerHTML + `<br>`;
    });
  
    p.innerHTML =  paragraphs;

    const readMore = document.createElement("p");
    readMore.classList.add("post-read-more");
    readMore.innerHTML = `Read More <i class="fa-solid fa-arrow-right"></i>`;
     
    container.append(anchorTag);
    anchorTag.append(div);
    div.append(img);
    div.append(title);
    div.append(p);
    div.append(readMore);
  });

}
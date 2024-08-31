const container = document.getElementById("all-posts_container")

export function fetchPosts(posts){

  let postsToRender = posts;

  postsToRender.forEach(post => {
    
    const anchorTag = document.createElement("a");
    anchorTag.href =`specifics.html?id=${post.id}`;

    const div = document.createElement("div");
    div.classList.add("post_container");

    const img = document.createElement("img");
    img.classList.add("post_img");
    const mediaImg = post._embedded[`wp:featuredmedia`][0];
    img.src = `${mediaImg.media_details.sizes.full.source_url}`;
    img.alt = `${mediaImg.alt_text}`;

    const title = document.createElement("h5");
    title.classList.add("post_title")
    title.innerText = `${post.title.rendered}`;

    const p = document.createElement("p");
    p.classList.add("post_text")
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = post.content.rendered;
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
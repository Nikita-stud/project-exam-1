const europeContainer = document.getElementById("posts-main-page_container-europe");
const asiaContainer = document.getElementById("posts-main-page_container-europe");

export function fetchMainPagePosts(posts){

  for(let i = 0; i<posts.length; i++){

    
    const filteredEuropePosts = posts[i].filter(post=>
      post.class_list.includes("category-europe")
    );
    const filteredAsiaPosts = posts[i].filter(post=>
      post.class_list.includes("category-asia")
    );

    const limitEuropePosts = filteredEuropePosts.slice(0, 3);
    const limitAsiaPosts = filteredAsiaPosts.slice(0, 3);






    
    const anchorTag = document.createElement("a");


    const div = document.createElement("div");
    div.classList.add("post_container");

    const img = document.createElement("img");
    img.classList.add("post_img");
    const mediaImg = posts[i]._embedded[`wp:featuredmedia`][0];
    img.src = `${mediaImg.media_details.sizes.thumbnail.source_url}`;
    img.alt = `${mediaImg.alt_text}`;

    const title = document.createElement("h5");
    title.classList.add("post_title")
    title.innerText = `${post[i].title.rendered}`;

    const p = document.createElement("p");
    p.classList.add("post_text")
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = posts[i].content.rendered;
    const allText = tempContainer.querySelectorAll("p")
    let paragraphs = "";
  
    allText.forEach(paragraph => {
      paragraphs += paragraph.innerHTML + `<br>`;
    });
  
    p.innerHTML =  paragraphs;

    
    const readMore = document.createElement("p");
    readMore.classList.add("post-read-more");
    readMore.innerHTML = `Read More <i class="fa-solid fa-arrow-right"></i>`;
     

    anchorTag.append(div);
    div.append(img);
    div.append(title);
    div.append(p);
    div.append(readMore);
  }

}
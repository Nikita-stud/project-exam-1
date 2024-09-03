const europeContainer = document.getElementById("posts-main-page_container-europe");
const asiaContainer = document.getElementById("posts-main-page_container-asia");
// const loadingPost = document.getElementById("loading_post");

// for(let i =0; i< 6; i++){
//   europeContainer.append(loadingPost.content.cloneNode(true));
//   asiaContainer.append(loadingPost.content.cloneNode(true));
// }

export function fetchMainPagePosts(posts){

  europeContainer.innerHTML ="";
  asiaContainer.innerHTML ="";

  const filteredEuropePosts = posts.filter(post=>
    post.class_list.includes("category-europe")
  );
  const filteredAsiaPosts = posts.filter(post=>
    post.class_list.includes("category-asia")
  );

  const limitEuropePosts = filteredEuropePosts.slice(0, 6);
  const limitAsiaPosts = filteredAsiaPosts.slice(0, 6);

  const createPosts = (post) =>{
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
    const renderedTitle = post.title.rendered.replace("&#8217", "")
    title.innerText = renderedTitle;

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
     

    anchorTag.append(div);
    div.append(img);
    div.append(title);
    div.append(p);
    div.append(readMore);

    return anchorTag;
  }

  limitEuropePosts.forEach(post =>{
    europeContainer.appendChild(createPosts(post))
  })
  limitAsiaPosts.forEach(post =>{
    asiaContainer.appendChild(createPosts(post))
  })

}
const carouselUlList =document.getElementById("carousel-unordered");
const prevCta = document.getElementById("cta-last-post");
const nextCta = document.getElementById("cta-next-post");
const loadingContainer = document.getElementById("loading_container")

const postOfficialWidth = function(){
  const post = document.querySelector("#carousel-li");
  return post.offsetWidth +27;
}

nextCta.addEventListener("click", function(){
  const postWidth = postOfficialWidth()
  carouselUlList.scrollLeft += postWidth ;
})
prevCta.addEventListener("click", function(){
  const postWidth = postOfficialWidth()
  carouselUlList.scrollLeft -= postWidth;
})


export function fetchCarousel(posts){
  loadingContainer.style.display="none";

  const newestPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  const limitTodaysPosts = newestPosts.slice(0, 5);

  const createPosts = (post) =>{
    const unorderedList =document.createElement("li");
    unorderedList.setAttribute("id","carousel-li")

    const anchorTag = document.createElement("a");
    anchorTag.href =`specifics.html?id=${post.id}`;
    anchorTag.setAttribute("id", "post-in-carousel");

    const div = document.createElement("div");
    div.classList.add("carousel-post_container");

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

    unorderedList.append(anchorTag);
    anchorTag.append(div);
    div.append(img);
    div.append(title);
    div.append(p);
    div.append(readMore);

    return unorderedList;
  }

  limitTodaysPosts.forEach(post =>{
    carouselUlList.appendChild(createPosts(post))
  });
}
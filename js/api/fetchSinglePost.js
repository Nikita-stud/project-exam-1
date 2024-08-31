const mainContainer = document.getElementById("specifics-all_container");

export function fetchSinglePost(post){

    const title = document.createElement("h1");
    title.classList.add("specifics_title")
    title.innerText = post.title.rendered;

    // const img = document.createElement("img");
    // img.classList.add("specifics-main-img");
    // const mediaImg = post._embedded[`wp:featuredmedia`][0];
    // img.src = `${mediaImg.media_details.sizes.full.source_url}`;
    // img.alt = `${mediaImg.alt_text}`;

    // const p = document.createElement("p");
    // p.classList.add("post_text")
    // const tempContainer = document.createElement("div");
    // tempContainer.innerHTML = post.content.rendered;
    // const allText = tempContainer.querySelectorAll("p")
    // let paragraphs = "";
  
    // allText.forEach(paragraph => {
    //   paragraphs += paragraph.innerHTML + `<br>`;
    // });
  
    // p.innerHTML =  paragraphs;

    // const readMore = document.createElement("p");
    // readMore.classList.add("post-read-more");
    // readMore.innerHTML = `Read More <i class="fa-solid fa-arrow-right"></i>`;
     

    mainContainer.append(title);
    // mainContainer.append(img);
    // mainContainer.append(p);
    // mainContainer.append(readMore);

}
const mainContainer = document.getElementById("specifics-all_container");

export function fetchSinglePost(post){

    const title = document.createElement("h1");
    title.classList.add("specifics_title")
    title.innerText = post.title.rendered;

    const mainImg = document.createElement("img");
    mainImg.classList.add("specifics-main-img");
    const mediaImg = post._embedded[`wp:featuredmedia`][0];
    mainImg.src = `${mediaImg.media_details.sizes.full.source_url}`;
    mainImg.alt = `${mediaImg.alt_text}`;

    const textDiv = document.createElement("div");
    textDiv.classList.add("specifics-text_container")

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = post.content.rendered;
    const renderedText = tempContainer.innerHTML.replace(/<(?!h2|h3|h4|h5|h6|p|li|br)[^>]*\>/g,'');
    textDiv.innerHTML = renderedText;

    const renderedImgs = tempContainer.querySelectorAll("img");
    const smallImgContainer = document.createElement("div")

    for(let i = 0; i<renderedImgs.length; i++){
        smallImgContainer.innerHTML = renderedImgs[i].currentSrc;
        console.log(rend)
    }



    mainContainer.append(title);
    mainContainer.append(mainImg);
    mainContainer.append(textDiv);
    mainContainer.append(div);
}
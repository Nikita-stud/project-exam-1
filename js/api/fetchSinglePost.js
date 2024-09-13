const mainContainer = document.getElementById("specifics-all_container");

export function fetchSinglePost(post){
    mainContainer.innerHTML = "";
    const allTextDiv = document.createElement("div");
    allTextDiv.classList.add("specifics-all-text");

    const title = document.createElement("h1");
    title.classList.add("specifics_title")
    const renderedTitle = post.title.rendered.replace("&#8217;", "")
    title.innerText = renderedTitle;
    document.title = document.title + " " + renderedTitle;
    const metaDescription = document.querySelector(`meta[name="description"]`);
    metaDescription.setAttribute("content", `The specifics of post, ${renderedTitle}`);


    const mainImg = document.createElement("img");
    mainImg.classList.add("specifics-main-img");
    const mediaImg = post._embedded[`wp:featuredmedia`][0];
    mainImg.src = `${mediaImg.media_details.sizes.full.source_url}`;
    mainImg.alt = `${mediaImg.alt_text}`;
    title.appendChild(mainImg);

    const textDiv = document.createElement("div");
    textDiv.classList.add("specifics-text_container")
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = post.content.rendered;
    const renderedText = tempContainer.innerHTML.replace(/<(?!h2|h3|h4|h5|h6|p|li|br)[^>]*\>/g,'');
    textDiv.innerHTML = renderedText;

    const smallImgContainer = document.createElement("div");
    smallImgContainer.classList.add("specifics-other-img_container");
    const renderedImgs = tempContainer.querySelectorAll("img");
    let convertedNode = Array.from(renderedImgs);
    const headers = textDiv.querySelectorAll("h3");

    convertedNode.forEach((img)=>{
        img.classList.add("specifics-other_imgs");
        img.alt ="Image of one of the landscapes in the country";
        smallImgContainer.appendChild(img);
    });
    headers[4].appendChild(smallImgContainer)

    allTextDiv.append(title);
    allTextDiv.append(textDiv);
    mainContainer.append(allTextDiv);
}
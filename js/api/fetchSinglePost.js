const mainContainer = document.getElementById("specifics-all_container");

export function fetchSinglePost(post){

    mainContainer.innerHTML = "";

    const mainImg = document.createElement("img");
    mainImg.classList.add("specifics-main-img");
    const mediaImg = post.media[0];
    mainImg.src = `${mediaImg.url}`;
    mainImg.alt = `${mediaImg.alt}`;
    mainContainer.appendChild(mainImg);

    const allTextDiv = document.createElement("div");
    allTextDiv.classList.add("specifics-all-text");

    const title = document.createElement("h1");
    title.classList.add("specifics_title")
    const renderedTitle = post.name
    title.innerText = renderedTitle;
    document.title = document.title + " " + renderedTitle;
    const metaDescription = document.querySelector(`meta[name="description"]`);
    metaDescription.setAttribute("content", `The specifics of post, ${renderedTitle}`);

    const textDiv = document.createElement("div");
    textDiv.classList.add("specifics-text_container")
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = post.description;
    const renderedText = tempContainer.innerHTML.replace(/<(?!h2|h3|h4|h5|h6|p|li|br)[^>]*\>/g,'');
    textDiv.innerHTML = renderedText;

    const smallImgContainer = document.createElement("div");
    smallImgContainer.classList.add("specifics-other-img_container");
    const renderedImgs = post.media.slice(1).map(mediaImg => Object.assign(document.createElement("img"), { src: mediaImg.url }));
    let convertedNode = Array.from(renderedImgs);
    const headers = textDiv.querySelectorAll("h3");

    convertedNode.forEach((img)=>{
        img.classList.add("specifics-other_imgs");
        img.alt ="Image of one of the landscapes in the country";
        smallImgContainer.appendChild(img);
    });
    textDiv.append(smallImgContainer)

    allTextDiv.append(title);
    allTextDiv.append(textDiv);
    mainContainer.append(allTextDiv);
}
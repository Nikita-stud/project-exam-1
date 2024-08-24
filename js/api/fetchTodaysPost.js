const imgContainer = document.getElementById("post-of-today_img-container");
const container = document.getElementById("post-of-today_text-container");

export function fetchTodaysPosts(posts){

  const featuredArray = posts.filter(post=>
  post.class_list.includes("tag-post-of-the-day" && "category-post-of-the-day")
  );
  const featuredFirstPost= featuredArray.shift();

  container.innerHTML = "";
  imgContainer.classList.remove("loading")

  const featuredMediaImg = featuredFirstPost._embedded[`wp:featuredmedia`][0];
  imgContainer.style.backgroundImage = `url(${featuredMediaImg.media_details.sizes.full.source_url})`;
  imgContainer.alt = `${featuredMediaImg.alt_text}`;

  const title = document.createElement("h2");
  title.classList.add("post-of-today_title")
  title.innerText =`${featuredFirstPost.title.rendered}`;


  const text = document.createElement("p");
  text.classList.add("text")
  const allText = featuredFirstPost.content.rendered;
  const onlyParagraphs = allText.querySelectorAll("p");
  console.log(featuredFirstPost.content.rendered)
  // let paragraphs = "";

  // onlyParagraphs.forEach(paragraph => {
  //   paragraphs += paragraph.innerHTML + `<br>`;
  // });

  // text.innerHTML =  paragraphs;

  const button = document.createElement("button");
  button.classList.add("cta-read-more-mobile");
  button.innerHTML =`Read More <i class="fa-solid fa-angle-right"></i>`;

  container.append(title);
  container.append(text);
  container.append(button);

}
    
  


      // if(post.class_list == "category-post-of-the-day" || post.class_list == "tag-post-of-the-day" ){
      //   console.log(post)
      // }
      

    // function featuredFilteredPost(feature){
    //   if(feature.class_list == "tag-post-of-the-day" && feature.class_list == "category-post-of-the-day"){
    //     return feature;
    //   }
    // };

    // const featured = post.filter(featuredFilteredPost);


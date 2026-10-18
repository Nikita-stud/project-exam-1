const imgContainer = document.getElementById("post-of-today_img-container");
const container = document.getElementById("post-of-today_text-container");

export function fetchPostOfToday(posts){
  
  const featuredArray = posts.filter(post=>
  post.rating == 5
  );
  const featuredFirstPost= featuredArray.shift();

  container.innerHTML = "";
  imgContainer.classList.remove("loading")

  const featuredMediaImg = featuredFirstPost.media[0];
  imgContainer.style.backgroundImage = `url(${featuredMediaImg.url})`;
  imgContainer.alt = `${featuredMediaImg.alt}`;

  const title = document.createElement("h2");
  title.classList.add("post-of-today_title")
  title.innerText =`${featuredFirstPost.name}`;


  const text = document.createElement("p");
  text.classList.add("text")
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = featuredFirstPost.description;
  const allText = tempContainer.querySelectorAll("p")
  let paragraphs = "";

  allText.forEach(paragraph => {
    paragraphs += paragraph.innerHTML + `<br>`;
  });

  text.innerHTML =  paragraphs;

  const button = document.createElement("button");
  button.classList.add("cta-read-more-mobile");
  button.innerHTML =`Read More <i class="fa-solid fa-angle-right"></i>`;
  button.addEventListener("click", redirectToSpecifics);

  const desktopButton = document.createElement("button");
  desktopButton.classList.add("cta-read-more-desktop");
  desktopButton.innerText ="TODAYS POST";
  desktopButton.addEventListener("click", redirectToSpecifics);

  function redirectToSpecifics(){
    location.href = `specifics.html?id=${featuredFirstPost.id}`;
  };

  container.append(title);
  container.append(text);
  container.append(button);
  imgContainer.append(desktopButton);
}
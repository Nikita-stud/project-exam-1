const mainContainer = document.getElementById("specifics-all_container");

export function enlargeOnClick(){
  const collectionOfImgs = document.getElementsByTagName("img");
  let arrayOfImgs = Array.from(collectionOfImgs);
  arrayOfImgs.shift();
  arrayOfImgs.pop();

  arrayOfImgs.forEach((img)=>{
    img.addEventListener("click",()=>{
      const div = document.createElement("div");
      div.classList.add("enlarge_container")
      div.appendChild(img.cloneNode(true));

      const closeIcon = document.createElement("i");
      closeIcon.classList.add(`enlarge-icon-close`,`fa-solid`,`fa-xmark`);

      div.addEventListener("click",()=>{
       div.remove()
      })

      mainContainer.append(div);
      div.append(closeIcon);
    })
  })
}
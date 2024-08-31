export function handleCLick(event){
  const post = {id: event.target.dataset.id};
  const favoriteList = JSON.parse(localStorage.get("favorites")) || [];
  favoriteList.push(post);
  localStorage.setItem("favorites", JSON.stringify(favoriteList));
};
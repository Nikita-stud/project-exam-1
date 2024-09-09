export function catchAndDisplay(message="There was an unexpected error, please try again later"){
  const main = document.querySelector("main");
  main.classList.add("errorOnPage");
  main.innerHTML = "";
  main.innerHTML = `<div>${message}</div>`;
}
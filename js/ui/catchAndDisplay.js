export function catchAndDisplay(container="message_container", message="There was an unexpected error", messageType="error"){
  const inside = document.querySelector(container);
  inside.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}
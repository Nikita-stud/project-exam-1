const form = document.getElementById("form-contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("cta-send");


export function contactFormValidation(){
  event.preventDefault();
  
  console.log("Hello there")


  message.onkeyup = function(){
    const messageLength = event.target.value.length
    if(messageLength >= 6){
      submit.disabled = false;
    }else{
      submit.disabled = true;
    }
  }
}

function validateMail(email){
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test((email).toLowerCase());
}



form.addEventListener("submit", contactFormValidation)
const form = document.getElementById("form-contact");
const input = document.querySelectorAll("input");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("cta-send");


export function contactFormValidation(){

  for (let i=0; i<input.length; i++){
    if(!name.value || name.value.length <= 5){
      input[0].classList.add("error")
    }
    if(!email.value || validateMail(email.value) === true){
  
    }
    if(!subject.value || subject.value.length <= 15){
  
    }
    if(!message.value.length || message.value.length <=25){
  
    }
  }

  if(name && email && subject && message){
    event.preventDefault()
    submit.disabled = false;
  }

  message.onkeyup = function(){
    const messageLength = event.target.value.length;
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
const form = document.getElementById("form-contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("cta-send");

const errorName = document.getElementById("name_error");
const errorEmail = document.getElementById("email_error");
const errorSubject = document.getElementById("subject_error");
const errorMessage = document.getElementById("message_error");

const textContainer = document.getElementById("form-contact_container");

export function contactFormValidation(){
  form.addEventListener("input", (event)=>{
    event.preventDefault();
  
    let disabled = true;
  
    function displayError(input){
      input.classList.add("error");
      input.classList.remove("accept")
      disabled = false;
    }
    function validateMail(email){
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
  
    if(!name.value || name.value.length <= 5){
      displayError(name);
      errorName.innerText= "Name must contain at least 6 letters";
    }else{
      name.classList.add("accept");
      errorName.innerText =""
    }
  
    if(!email.value || !validateMail(email.value)){
      displayError(email);
      errorEmail.innerHTML = `<p>Provide email in format: <span class="form-span-message">contact<i class="fa-solid fa-at"></i>example.com</span></p>`;
    }else{
      email.classList.add("accept");
      errorEmail.innerText ="";
    }
  
    if(!subject.value || subject.value.length <= 15){
      displayError(subject);
      errorSubject.innerHTML = `<p>Subject must contain at least 16 letters!<span class="form-span-message"> Currently: ${subject.value.length}</span></p>`;
    }else{
      subject.classList.add("accept");
      errorSubject.innerText="";
    }
  
    if(!message.value.length || message.value.length <= 25){
      displayError(message);
      errorMessage.innerHTML = `<p>Message must contain at least 26 letters! <span class="form-span-message"> Currently: ${message.value.length}</span></p>`;
    }else{
      message.classList.add("accept");
      errorMessage.innerText="";
    }
  
    if(disabled){
      submit.disabled = false;
      submit.addEventListener("click", ()=>{
        textContainer.innerHTML= `<div class="submit-success_container">
                                     <p class="submit-success_text"><span class="submit-success_text-icon"><i class="fa-solid fa-circle-check"></i></span>Thank you for submiting your question or inquirie, we will answer as fast as we can!</p>
                                  </div>`;
      })
    }
  
  });
}
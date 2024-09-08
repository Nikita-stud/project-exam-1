const form = document.getElementById("form-contact");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("cta-send");


export function contactFormValidation(event){
  event.preventDefault()
  const isDisabled = handleFormValidation()
  submit.disabled = isDisabled;

  const textContainer = document.getElementById("form-contact_container");

  submit.addEventListener("click", ()=>{
    textContainer.innerHTML= `<div class="submit-success_container">
                                 <p class="submit-success_text"><span class="submit-success_text-icon"><i class="fa-solid fa-circle-check"></i></span>Thank you for submiting your question or inquirie, we will answer as fast as we can!</p>
                              </div>`;
  })
}
form.addEventListener("input", contactFormValidation);


function handleFormValidation(){
    let disabled = false;

    const errorName = document.getElementById("name_error");
    if(!name.value || name.value.length <= 5){
      name.classList.add("error");
      name.classList.remove("accept")
      errorName.innerText= "Name must contain at least 5 letters";
      disabled = true;
    }else{
      name.classList.add("accept");
      errorName.innerText =""
    }
  
    const errorEmail = document.getElementById("email_error");
    function validateMail(email){
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
    if(!email.value || !validateMail(email.value)){
      email.classList.add("error");
      email.classList.remove("accept")
      errorEmail.innerHTML = `<p>Provide email in format: <span class="form-span-message">contact<i class="fa-solid fa-at"></i>example.com</span></p>`;
      disabled = true;
    }else{
      email.classList.add("accept");
      errorEmail.innerText ="";
    }
  
    const errorSubject = document.getElementById("subject_error");
    if(!subject.value || subject.value.length < 15){
      subject.classList.add("error");
      subject.classList.remove("accept")
      errorSubject.innerHTML = `<p>Subject must contain at least 15 letters!<span class="form-span-message"> Currently: ${subject.value.length}</span></p>`;
      disabled = true;
    }else{
      subject.classList.add("accept");
      errorSubject.innerText="";
    }

    const errorMessage = document.getElementById("message_error");
    if(!message.value.length || message.value.length < 25){
      message.classList.add("error");
      message.classList.remove("accept")
      errorMessage.innerHTML = `<p>Message must contain 25 letters! <span class="form-span-message"> Currently: ${message.value.length}</span></p>`;
      disabled = true;
    }else{
      message.classList.add("accept");
      errorMessage.innerText="";
    }
    return disabled;
}




// let valid = true;
   
// input.forEach((inp)=>{
//   inp.classList.remove("error", "accept")
// })

// for (let i=0; i<input.length; i++){  
//   switch(i){
//     case 0:
//       if(!name.value || name.value.length <= 5){
//         input[0].classList.add("error");
//         valid = false;
//       }else{
//         input[0].classList.add("accept");
//       }
//     break;
//     case 1:
//       if(!email.value || !validateMail(email.value)){
//         input[1].classList.add("error");
//         valid = false;
//       }else{
//         input[1].classList.add("accept");
//       }
//     break;
//     case 2:
//       if(!subject.value || subject.value.length <= 15){
//         input[2].classList.add("error");
//         valid = false;
//       }else{
//         input[2].classList.add("accept");
//       }
//     break;
//     case 3:
//       if(!message.value.length || message.value.length <=25){
//         input[3].classList.add("error");
//         valid = false;
//       }else{
//         input[3].classList.add("accept");
//       }
//     break;
//     default:
//       if(valid){
//         submit.disabled = false;
//       }
//     break;
//   }
// }
// event.preventDefault();
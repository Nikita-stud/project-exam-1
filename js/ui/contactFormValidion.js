const form = document.getElementById("form-contact");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const submit = document.getElementById("cta-send");



export function handleFormValidation(event){
  event.preventDefault();

  let valid = true;

  function validateName(){
    const errorName = document.getElementById("name_error");

    if(!name.value || name.value.length <= 5){
      name.classList.add("error");
      name.classList.remove("accept")
      errorName.innerText= "Name must contain 5 letters";
      valid = false;
    }else{
      name.classList.add("accept");
      errorName.innerText =""
    }
  }


  function validateEmail(){
    const errorEmail = document.getElementById("email_error");

    function validateMail(email){
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(String(email).toLowerCase());
    }
    if(!email.value || !validateMail(email.value)){
      email.classList.add("error");
      email.classList.remove("accept")
      errorEmail.innerText = "Provide a valid email";
      valid = false;
    }else{
      email.classList.add("accept");
      errorEmail.innerText ="";
    }
  }


  function validateSubject(){
    const errorSubject = document.getElementById("subject_error");
    if(!subject.value || subject.value.length <= 15){
      subject.classList.add("error");
      subject.classList.remove("accept")
      errorSubject.innerText = "Subject must contain at least 15 letters";
      valid = false;
    }else{
      subject.classList.add("accept");
      errorSubject.innerText="";
    }
  }


  function validateMessage(){
    const errorMessage = document.getElementById("message_error");
    if(!message.value.length || message.value.length <=25){
      message.classList.add("error");
      message.classList.remove("accept")
      errorMessage.innerText = "Message must contain 25 letters";
      valid = false;
    }else{
      message.classList.add("accept");
      errorMessage.innerText="";
    }
  }

  if(valid){
    submit.disabled = false;
  }


  name.addEventListener("input",validateName);
  email.addEventListener("input", validateEmail)
  subject.addEventListener("input",validateSubject);
  message.addEventListener("input",validateMessage);

}

form.addEventListener("input", handleFormValidation);






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
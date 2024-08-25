const message = document.getElementById("message");
const submit = document.getElementById("cta-send");

export function handleSubmitForm(){

  
  message.onkeyup = function(){

    const messageLength = event.target.value.length

    if(messageLength >= 6){
      submit.disabled = false;
    }else{
      submit.disabled = true;
    }
  }
}
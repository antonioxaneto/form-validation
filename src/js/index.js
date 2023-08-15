const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

   checkInputs()
})

function checkInputs(){
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const mensagemValue = mensagem.value.trim()

    if(usernameValue === '') {
        errorInput(username, 'campo obrigatório')
    }else{
        validoInput(username)
    }

    if(emailValue === ''){
        errorInput(email, 'campo obrigatório')
    }else{
        validoInput(email)
    }

    if(telefoneValue === ''){
        errorInput(telefone, 'campo obrigatório')
    }else{
        validoInput(telefone)
    }

    if(mensagemValue === ''){
        errorInput(mensagem, 'campo obrigatório')
    }else{
        validoInput(mensagem)
    }
}

     function errorInput(input, message){
     const formItem = input.parentElement;
     const textMessage = formItem.querySelector("a")

     textMessage.innerText = message;
     formItem.className = "formulario error"
 }

    function validoInput(input) {
    const formItem = input.parentElement;
    
    formItem.className = "formulario valido"
 }

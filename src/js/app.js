const formulario = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const errorMsg = document.querySelector('.msg-error')
const containerMain = document.querySelector('.container-main')
const modal = document.querySelector('.modal')
const emailRegistrado = document.querySelector('#email-registrado')
const btnCerrar = document.querySelector('.btn-modal')
const btnSubmit = document.querySelector('.btn-submit')
console.log(emailRegistrado)

btnCerrar.addEventListener('click', cerrarModal)

formulario.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    console.log(email)

    if (validarEmail(email)) {        
        mostrarModal(email);
        
        console.log('Dirección de correo electrónico válida:', email);
    } else {        
        errorMsg.classList.add('error')
        errorMsg.innerHTML = 'Valid email required'       
        emailInput.focus();
        emailInput.style.borderColor = 'rgb(255, 98, 87)';
        emailInput.classList.add('invalido');       
    }
});

emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    if (validarEmail(email)) {
        emailInput.classList.remove('invalido');
        errorMsg.innerHTML = '';
        emailInput.style.borderColor = 'rgb(122 211 99)';    
    } else {
        emailInput.classList.add('invalido');
        emailInput.style.borderColor = 'rgb(255, 98, 87)';
    }
})

function mostrarModal(email) {
    emailRegistrado.innerHTML = email;
    modal.classList.remove('hidden')
    containerMain.classList.add('hidden')

}

function cerrarModal() {
    modal.classList.add('hidden');    
    containerMain.classList.remove('hidden');    
}

function validarEmail(email) {
    const emailValido = /^[^s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValido.test(email)
}
const buttonSubmit = document.querySelector(".buttonSubmit");

export function valida(input, inputs) {
    
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
        submitControler(inputs);
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        submitControler(inputs);
    }
}

function submitControler(inputs) {
    let count = 0;
    inputs.forEach(input => {
        if(!(input.validity.valid)){
            return;
        } 
            count++;
    });
    if(count == inputs.length){
        buttonSubmit.classList.remove("button-disabled");
        buttonSubmit.disabled = false;
        return;
    } 
        buttonSubmit.classList.add("button-disabled");
        buttonSubmit.disabled = true;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajeDeError = {
    nombre: {
        valueMissing: "Este campo nombre no puede estar vacío",
        patternMismatch: "El nombre no es válido"
    },
    email: {
        valueMissing: "Este campo email no puede estar vacío",
        typeMismatch: "El correo no es válido",
        patternMismatch: "El correno no es válido"
    },
    asunto: {
        valueMissing: "Este campo asunto no puede estar vacío",
    },
    mensaje: {
        valueMissing: "Este campo mensaje no puede estar vacío",
    }
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}


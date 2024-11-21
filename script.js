function mostarmensaje(){
    alert("Hola!!!, Bienvenidos...");
}

function validarFormulario(){
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    
    if (nombre === "" || email==="") {
        alert("Debe completar todos los campos que tengan un *")
        return false;
    }
    return true;
}
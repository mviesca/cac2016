function validaForm() {
    var usuario = document.getElementById('usuario').value;
    var clave = document.getElementById('clave').value;
    var expresion = /\w+@\w+/;

    if(!expresion.test(usuario)) {
        if(clave === "") {
            alert("Falta @ en usuario y clave");
        }else{
            alert("Falta @ en usuario");
        }
        return false;
    }else{
        if(clave === ""){
            alert("Falta clave");
            return false;
        }else{
            alert("Ingresó correctamente");
            return true;
        }
    } 
}


$(document).ready(function() { 

$(".loader").fadeOut(9000);  

document.setTimeout( function() { 

 $("section").removeClass().addClass("loaded");  

}, 5000); 

var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var validadorNumero = /[0-9]/;

var validadorNombre = /[A-z]/; 

var validadorCVV = /^[0-9]{3,4}$/;

// valida los numeros de tarjeta mas conocidos como mastercard visa o american express

var validadorNumeroTarjeta = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;

//esta regEx no valida espacios en blanco, debe usarse una validacion previa a esta

var validaContraseñas = /(?=^.{8,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

$("#boton").prop('disabled', true);

var validacionCorreo = false;

var validacionTarjeta = false; 

var validacionCVV = false; 

var validacionRespuesta = false; 

var validacionTipo = false;

$("#correo").on('blur', function () { 

if(emailRegex.test(this.value)) { 

$("#correo").css('border-color','#0F0');

$(".tilde").css('display','block') 

$(".negado").css('display','none')

validacionCorreo = true;

} else { 

$(".negado").css('display',"block"); 

$(".tilde").css('display','none')

$("#correo").css('border-color','#F00');

validacionCorreo = false;

}

if (validacionCorreo == true && validacionTarjeta == true && validacionCVV == true && validacionRespuesta == true && validacionTipo == true) { 

$("#boton").prop('disabled', false)

} else { 

$("#boton").prop('disabled', true)

} 

});




$("#numeroTarjeta").on('keyup', function () { 

if(validadorNumeroTarjeta.test(this.value)) { 

$(".negado2").css('display','none') 

$(".tilde2").css('display','block')  

$('#numeroTarjeta').css('border-color','deepSkyblue') 

validacionTarjeta = true;

}else { 

$("#numeroTarjeta").css('border-color','red') 

$(".negado2").css('display','block') 

$(".tilde2").css('display','none') 

validacionTarjeta = false;

}

if(validacionCorreo == true && validacionTarjeta == true && validacionCVV == true && validacionRespuesta == true && validacionTipo == true) { 

$("#boton").prop('disabled', false)

} else { 

$("#boton").prop('disabled', true)

} 

});





$("#codigoTarjeta").on('keyup', function () { 

if(validadorCVV.test(this.value)) {  

$(".negado3").css('display','none') 

$(".tilde3").css('display','block')  

$(this).css('border-color','deepSkyblue') 

validacionCVV = true;

} else { 

$(".negado3").css('display','block') 

$(".tilde3").css('display','none')  

$(this).css('border-color','#F00') 

validacionCVV = false;

}

if(validacionCorreo == true && validacionTarjeta == true && validacionCVV == true && validacionRespuesta == true && validacionTipo == true) { 

$("#boton").prop('disabled', false)

} else { 

$("#boton").prop('disabled', true)

} 

});








$("#respuestaSecreta").on('keyup', function() { 

var espacios = false;

var cont = 0;
 
while (!espacios && (cont < this.value.length)) {
  if (this.value.charAt(cont) == " ")
    espacios = true;
  cont++;
}
 
if (espacios) {
  $("#validaRespuesta").text("La contraseña no puede contener espacios en blanco").css('color','brown');
  return false;

$("#respuestaSecreta").css('border-color','brown')

validacionRespuesta = false;

}

if(validaContraseñas.test(this.value)) { 

$("#validaRespuesta").text("contraseña aceptable").css('color','deepSkyblue') 

$("#respuestaSecreta").css('border-color','#0F0') 

validacionRespuesta = true;

}else {  

$("#validaRespuesta").text("no cumple con los parametros").css('color','red') 

$("#respuestaSecreta").css('border-color','#F00')

validacionRespuesta = false;

} 

if(validacionCorreo == true && validacionTarjeta == true && validacionCVV == true && validacionRespuesta == true && validacionTipo == true ) { 

$("#boton").prop('disabled', false)

} else { 

$("#boton").prop('disabled', true)

} 

});






$("#checking").on('change', function() { 

var campoContraseña = $("#respuestaSecreta");

if(campoContraseña.attr('type') == 'password') {

campoContraseña.attr('type','text')

} else { 

campoContraseña.attr('type','password')

}
 
});





var circulito1 = $("#clicking1") 

var circulito2 = $("#clicking2") 

$("#clicking1, #clicking2").on('click', function() {  

validacionTipo = true; 

if(validacionCorreo == true && validacionTarjeta == true && validacionCVV == true && validacionRespuesta == true && validacionTipo == true ) { 

$("#boton").prop('disabled', false)

} else { 

$("#boton").prop('disabled', true)

} 

});  


$("#boton").on('mousedown', function () { 

window.location.assign('pagina2.html')

});

// tambien sirve solo colocar $("input") pero se ve mas elegante como esta abajo XD

$(document.getElementsByTagName('input')).on('focus', function() {  

$(this).css('border-color','gold')


});

$(document.getElementsByTagName('select')).on('focus', function() {  

$(this).css('border-color','gold')


});


});
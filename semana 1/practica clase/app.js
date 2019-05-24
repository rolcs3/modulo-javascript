var nombre = prompt('Cual es tu nombre');
var apellido = prompt('Cual es tu apellido');
var edad = prompt('Cual es tu edad');
var escuela = prompt('Cual es tu escuela');

var respuesta = parseInt(prompt('Que quieres ver \n1=nombre \n2=apellido \n3=edad \n4=escuela '));
if(respuesta == 1) {
  alert("Bienvenido " + nombre);
}
else if(respuesta == 2) {
alert("tu apellido es " + apellido);
}
else if(respuesta == 3) {
alert("tu edad es " + edad);
}

else if(respuesta == 4) {
alert("tu ubicacion es " + escuela);
}

var nombre = prompt('Cual es tu nombre');
var apellido = prompt('Cual es tu apellido');
var edad = prompt('Cual es tu edad');
var escuela = prompt('Cual es tu escuela');
var municipio = prompt('Cual es tu municipio');
var hobbies = prompt('Cual es son tus hobbies');
var deporte = prompt('Cual es tu deporte favorito');
var comida = promp('cual es tu comida favorita');


var respuesta = parseInt(prompt('Que quieres ver \n1=nombre \n2=apellido \n3=edad \n4=escuela \n5=municipio \n6=hobbies \n7=deporte' ));
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
alert("tu escuela es " + escuela);
}

else if(respuesta == 5) {
alert("tu ubicacion es " + municipio);
}

else if(respuesta == 6) {
alert("tus hobbies son " + hobbies);
}

else if(respuesta == 7) {
alert("tu deporte favorito es " + deporte);
}

else if (respuesta == 8) {
  alert("tu comida favorita es " + comida);
}

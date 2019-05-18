//auto focus para poscicionar el cursor, y place holder para que muestre el mensaje de escribir los datos (autofocus placeholder= )

// limpiar campos y escribir nuevos nvalores = button onclick="limpiar():
function limpiar() {
  document.getElementById("miFormulario").reset();

}
function sumar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('resultado').value = x+y;

}
function restar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('resultado').value = x-y;
}
function multiplicar() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('resultado').value = x*y;
}

function dividir() {
  var x = parseInt(document.getElementById('valor1').value);
  var y = parseInt(document.getElementById('valor2').value);
  document.getElementById('resultado').value = x/y;
}

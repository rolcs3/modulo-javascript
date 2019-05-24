document.querySelector('.addbtn').addEvent.Listener('click',onClick);


function onClick(e){

}

eventos onClick y onDblClick
<head><title> Ejemplo del evento onClick</title>
<script language=JavaScript>
var numberOfClicks = 0;

function myButton_onclick() {
   numberOfClicks++;
   window.document.form1.myButton.value = 'Botón pulsado ' + numberOfClicks +
   ' veces';
}
</script>
</head>
<body>

<FORM NAME=form1>
   <INPUT TYPE='button' NAME='myButton' VALUE='Botón pulsado 0 veces'
   onclick="myButton_onclick()">
</FORM>

</body>



 eventos onLoad y onUnLoad
 <head><title> Ejemplo del evento onLoad</title>
<script language=JavaScript>
function window_onload() {
   var numberForms = document.forms.length;
   var formIndex;
   for (formIndex = 0; formIndex < numberForms; formIndex++) {
      alert(document.forms[formIndex].name);
   }
}
</script>
</head>
<body language=JavaScript onLoad="window_onload()">

<FORM NAME="form1">
<P>Dentro del Primer formulario</P>
</FORM>

<FORM NAME="form2">
<P>Dentro del Segundo formulario</P>
</FORM>

<FORM NAME="form3">
<P>Dentro del Tercer formulario</P>
</FORM>

onMouseOver y onMouseOut
El evento onMouseOver sucede cada vez que el cursor del ratón pasa por encima de un elemento de la página
mientras que el evento onMouseOut tiene lugar cuando se deja de seleccionar dicho elemento.

let info = {
  name:'Luciano',
  city: 'MTY',
  school: 'UANL'
}

//varaible concatenar
//let html;
//info.name

//html = '<ul> <li>'+
//info.name + '</li><li>'+
//info.city + '</li><li>'+
//info.school + '</li></ul>'



html=`
<ul>
<li>Name: ${info.name}</li>
<li>City: ${info.city}</li>
<li>School: ${info.school}</li>
</li>
</ul>
`
//imprimir en la consola
console.log(info);

document.body.innerHTML=html

// Hay diferentes tipos de declarar las variables, var, let y const

// var i = 7;
// (function () {
//   for (let i=0;i<5;i++) {
//     console.log(i)
//   }
// })()
// console.log(i)

// CONVERSIONES
// let val = 5
// val = String(val)
// val = val.toString()
// val = "555"
// val = Number(val)
// val = "444.22"
// val = parseInt(val)
// val = "333.33"
// val = parseFloat(val)
// console.log(val)

// TRABAJANDO CON STRINGS
// let val = "Hello class"
// let name = "Pedroo"
// val = val+' '+name
// val = name.length
// val = name.concat(' ',val)
// val = name.toUpperCase()
// val = name.toLowerCase()
// val = name[1]
// val = name.indexOf('o')
// val = name.lastIndexOf('o')
// val = name.charAt('3')
// val = name.charAt(name.length-1)
// val = name.substring(0,2)
// val = name.slice(0,1)
// val = name.slice(-1)
// list = 'lemon,pepper,pizza'
// list = list.replace('lemon','water')
// val = list.split(',')
// val = "Alcedo Andrade"
// val = val.includes('Alcedo')
// console.log(val)

// TRABAJANDO CON ARREGLOS
// let val;
// let x = 3
// let test = ['44','Pedro',22,false,null,new Date(),{city:'Miami'}]
// test = new Array(22,33,44,55,66)
// val = test.length
// val = Array.isArray(x)
// val = test[1]
// val = test.indexOf(55)
// let test2 = [1,2,3,4,5]
// val = test.concat(test2)
// // test.push(77)
// // test.unshift(77)
// // test.shift();
// // test.pop();
// // test.reverse();
//
// let names = ['Ana','Raul','Juan','Vale']
// val = names
// val = names.sort()
// let test3 = [8,65,22,14,1]
// val = test3.sort(function(x,y){
//   return y-x;
// })
//
// function over50(x) {
//   return x>50;
// }
// console.log(val);
// val = test.find(over50)
// console.log(val);

// TRABAJANDO CON OBJETOS
// const person = {
//   firstName: 'Pedro',
//   lastName: 'Alcedo',
//   age: 40,
//   email: 'plalcedo@gmail.com',
//   hobbies: ['music','sport'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
// }
// let val;
// val = person;
// val = person['firstName']
// val = person.firstName
//
// console.log(val)

// MI OBJETO
// const person = {
//   firstName: 'Pedro',
//   lastName: 'Alcedo',
//   age: 20,
//   email: 'plalcedo@gmail.com',
//   hobbies: ['Videojuegos','Series','Musica'],
//   address: {
//     city: 'Monterrey',
//     state: 'NL'
//   },
// }

// IF
// const id = 22;
// if (id>0 || id<15) {
//   console.log("Correcto")
// } else {
//   console.log("Error")
// }

// OPERACIONES TERNIARIAS
// const id = 22
// console.log(id == 21 ?
// 'Correcto':'Incorrecto')

// OTRA FORMA DE IF, DEBE ESTAR IDENTADO - FORMA DE ELSE IF
// if (true)
//   console.log(true)
// else if (true)
//   console.log(false)

// FOR
// for (var i = 0; i < 5; i++) {
//   console.log(i)
//   if (i==0) {
//     console.log("Igual a 0.");
//     continue;
//   }
//   if (i==2) {
//     break;
//   }
// }

// WHILE
// let i = 0;
// while (i<10) {
//   console.log('Number '+i);
//   i++;
// }

// DO-WHILE
// let i = 0;
// do {
//   console.log('Number '+i);
//   i++;
// } while (i<10);

// FUNCIONES
// function saludo(firstName='Pedro',lastName='Alcedo') {
//   return 'Hello '+firstName+' '+lastName;
// }
// console.log(saludo('Luis','Andrade'));

// EXPRESIONES
// const square = function(x=3) {
//   return x*x;
// }
// console.log(square());

// EXPRESIONES EN OBJETOS
// const todo = {
//   add: function() {
//     console.log('Agregado');
//     return 0
//   },
//   edit: function() {
//     console.log('Editado');
//   }
// }
// todo.delete = function() {
//   console.log('Borrar');
// }
// console.log(todo.add());
// todo.delete();

// OBJETO WINDOW
// console.log(window);
// window.alert('Hola')
// const input = prompt()
// alert(input)
//
// if (confirm('¿Estas seguro de pasar JS?')){
//   console.log('Si estoy seguro.');
// } else {
//   console.log('No estoy seguro.');
// }

// MÁS OPCIONES DEL OBJETO WINDOW
// let val;
// val = window.outerHeight;
// val = window.outerWidth;
// val = window.innerHeight;
// val = window.scrollY;
// val = window.location;
// val = window.location.hostname;
// REDIRECCIONAR
// window.location.href = 'http://google.com'
// RECARGAR
// window.location.reload();
// HISTORIAL
// window.history.go(-3)
// val = window.history.length;
// console.log(val);

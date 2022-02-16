/*Haz un javascript para: 
Calcular el área de un triángulo. 
¿Qué variables necesitas? 
Los valores deben de ser capturados con promt y mostrados con alertas.*/

let altura = prompt("Ingresa la altura del triangulo");
console.log(altura);

let base = prompt("Ingresa la base del triangulo");
console.log(base);

let area = parseFloat(altura) * parseFloat(base) /2 ;
console.log(area)

alert("El área del triangulo es" + " " + area);
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

/* inicialización, la condición y el incremento antes del propio bucle, 
son los parametros del bucle for para este ejercicio 

lo hicimos de la manera que 
la condicion 
que incie de la posicion cero de cada uno de los arreglos , que
la condicion es que sea menor a todos los elementos del arreglo y que 
incremente de uno en uno de manera tal que se hizo lo mismo para los tres 
arreglos, para que haga el barrido por todos los elementos del arreglo
y luego consollog lo cual usamos la interpolacion mediante plantillas
literales d los tres arreglos para motar todos los casos posibles de
acuerdo a los tres arreglos y sus numero de elementos 
 */


for (let i = 0; i < pronoun.length; i++) {
  for (let m = 0; m < adj.length; m++) {
    for (let n = 0; n < noun.length; n++) {
      console.log(`${pronoun[i]}${adj[m]}${noun[n]}.com`);
    }
  }
} /** */

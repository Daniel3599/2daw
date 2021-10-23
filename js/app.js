//Ejercicio
//Inicialización de las variables
var numeroFinal=12;
//Usamos el operador resto para saber si el número es imparpar
var resto=0;
//Comienza la cuenta
for (i = 0; i <= numeroFinal; i++) {
    resto=i%2;
    if(resto!=0) console.log(i); //muesta el resultado en la consola (F12)
}

/* let para que no haya alcance fuera del bloque y poder usar el mismo nombre
sin que se lien. No visible fuera del bloque. Limita scope (alcance)*/

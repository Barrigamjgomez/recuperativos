

//------------ ejercicio 1 [dificil] --------------------------------------------  
// Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
var ejemplo=[1,2,3,4,5]; //variable ejemplo para probar la función

function retorn (arr,n){  //hacemos una función con sus parametros para agregarle un for
  for( i=0; i<n; i++){  //con el for logramos el recorrido del array ajemplo, para que vaya comparando uno por uno con 1++ cada n°
  arr.unshift(arr.pop()); //con el metedo unshift agrego el elemnto que me entrega el for al inicio del array y al mismo tiempo elimino el ultimo con el metodo pop colocando en el mismo metodo de unshift
  }return arr; // para que me retorne el array rotado desde el indice que le indico.
 }
//probando ejemplo
console.log(retorn(ejemplo,3));

//------------ ejercicio 2 [dificil]----------------------------------------------- 

//Dado un arreglo de números positivos, retornar true si este se encuentra ordenado de menor a mayor, en caso contrario false. 
//No puede usar el método sort() de javascript.
function orden (array) {
	var len = array.length;
  //recorrer el array desde el indice 0 hasta el largo del arreglo y va avanzando de 1 en 1
  for ( var i = 0; i<len ; i++ ) {
  	for( var j=0; j<len-1; j++ ){
	    if (array[j] > array[j+1]){

	    	var temp = array[j];
	    	array[j] = array[j+1]
	    	array[j+1] =tem;
	     return false;
      } 
      else {
      	return true;
      }  
    }
	}
}


//------------ ejercio 3 [dificil]-----------------------------------------------------
//Dado un arreglo de números positivos, encontrar los elementos adyacentes cuya suma sea la mayor, retornar el resultado de la suma.


var ejemplo = [1,2,3];
function index (arr) {
	for( i=0; i=arr.length; i++ ){
		arr.prototype.indexOf();
	} return arr;



//------------------ejercicio 4 [dificil]-----------------------------------------------------
//Dado un arreglo de números positivos, encontrar el elemento más pequeño y 
//retornar su índice.

  var positive = [1,2,3,4,5,6]; //arreglo de numero positivos

	function menor (arr){ //creamos una funcion con el atributo del array que vamos a recorrer
		var position = 0; //luego creamos una variable que almacenara la posicion del indice
		var imenor = arr[0]; //luego creamos la variable que tomara el primer valor del array, por eso lo posicionamos en el indice 0
		for( var i=0; i< arr.length; i++ ){  //despues hacemos un for para recorrer el arreglo uno por uno
	 		if( arr[i] < imenor ){ //con if comparamos cada numero con el numero menor
        imenor=arr[i] //a imenor le damos el valor del numero mas pequeño del array
        position = i; // a posicion le doy el valor del indice
		 	}
		}return i;
	}

	//-----------------  ejercicio 5 [dificil]-----------------------------------------------------

/*
Dado un arreglo de números positivos, encontrar el elemento más pequeño e intercambiarlo por 
el primer elemento del arreglo.

Ejemplo:	arr = [3, 2, 1]
			retorna [1, 2, 3]

			arr = [4, 3, 1, 2]
			retorna [1, 3, 4, 2]*/
// Ir comparando desde la casilla 0 número tras número hasta encontrar uno mayor, si este es 
//realmente el mayor de todo el vector se llevará hasta la última casilla, si no es así, será 
//reemplazado por uno mayor que él.
var arr1 = [3, 2, 1];// array ejemplo para probar función.
function orderarray(array){ //pasamos el array, un array cualquier como argumento
  var temp=0; //creamos una variable igual a cero, nos sirve para igualar con otra variable
  for(var i=0;i<array.length;i++){ // hacemos el recorrido del primer numero con el primer for
    for(var j=0;j<array.length-1;j++){ // hacemos otro for, como no pueden ser dos variables iguales
      //para comparar, a la variable le colocamos j y un -1 para que al ultimo numero no lo compare 
      //con uno no existente
      if(array[j]>array[j+1]){ // decimos que si el numero en la posición j es mayor al numero que 
        //esta en la posición siguiente entonces voy a guardar ese número en temp.
        temp=array[j];
        array[j]=array[j+1];// y ese numero que tenemos en el array con posición j va a tomar 
        //la posición siguiente y asi volver a ser comparado .
        array[j+1]=temp;// se le pasa el número guardado anteriormente a la posición que sigue .
      }
    }
  }
  return array; // retorno el array ordenado
}    //en el fondo es una comparación , cuando se quieren comparar dos números en un array 
//siempre van a haber 2 for , de otra forma no se puede.

console.log(orderarray(arr1));


//---------------------- ejercicio 6 [medio]-------------------------------------------------
/*
Dado un arreglo de números enteros positivos, se necesita detectar si están en orden 
ascendente (menor a mayor). Si es así, nuestra función debe retornar true, en caso 
contrario false. (Puede usar método sort())*/




//---------------------- ejercicio 7 [medio]-------------------------------------------------

//Dado un arreglo y un número, verificar si el número se encuentra en el arreglo. En 
//caso de ya existir deberá retornar el arreglo sin cambios, en caso contrario retornar 
//el arreglo nuevo con el número ingresado.



//---------------------- ejercicio 8 [medio]-------------------------------------------------

//Dado un arreglo y un número, retornar el índice (posición) del número

   var array =[1,2,3,4,5,6,7]; // este es el arrai 
     console.log(array.indexOf(3)) //indexOf devuelve la posicion del numero





//---------------------- ejercicio 9 [medio]-------------------------------------------------
/*
Dados dos arreglos, devolver un nuevo arreglo que contenga la suma de los índices de cada array, arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
Ejemplo:   arr1 = [1, 2, 3, 4]
		     arr2 = [5, 6, 7, 8]
		     retorna nuevoArr = [6, 8, 10, 12]*/

arra1 = [1, 2, 3, 4]; //estos arrays son ejemplos que pueden cambiar
arra2 = [5, 6, 7, 8];
function sumarray(arr1,arr2){ // arr1 y arr2 son cualquier array 
  var arr3=[]; //creo un nuevo array que tendra la suma de los elementos que estan en la misma posición en los array
 for(i=0;i<arr1.length;i++){ //recorro los array , los dos tienen la misma longitud si que pongo que tenga la longitud de arr1
  arr3[i]=arr1[i]+arr2[i]; // entonces mi nuevo array , arr2 en las distintas posiciones que recorra con el for , va a ser igual a las sumas de estas 
   //posiciones del arr1 y el arr2.
 }return arr3; //retorno mi nuevo array.
  
}
console.log(sumarray(arra1,arra2));

/*Problema fácil 11 (20 puntos):
Diseñar un programa que lea las calificaciones de un alumno (10 notas en total). 
Debes calcular e imprimir su promedio, y decir a través de un alert si el ramo fue 
aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio igual o mayor a 4. */

//---------------------- ejercicio 10 [medio]-------------------------------------------------

/*Problema medio 10 (30 puntos):
Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo. 
Escribir una función donde dado el nombre de la persona puedas retornar el asiento que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.
Ejemplo:  lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
		    nombre = “Nadia”
		    retorna 3*/

		   

var lista=["allison","belen","nadia","marcia","fabian"]; //array solo para probar función , puede ser cualquier array

function seatNumber(arr,name){ //la función tiene como parametro el array y el 
	//nombre a buscar
if(arr.indexOf(name)!==-1){ // cuando un elemento no se encuentra dentro de un 
	//array y aplicamos el metodo indexOf , este da por resultado -1
  //por lo que aqui digo que si el elemento dentro del array, su 
  //indexOf NO es igual a -1 , eso quiere decir que EXISTE EN EL ARRAY 
  //si que abro corchetes y le digo
  return arr.indexOf(name)+1; // que retorne el indexOf del elemento y que
  // le sume 1 , le sumo 1 porque en el enunciado dice que la númeración 
  //comienza en 1 , y resulta que el indexOf COMIENZA A CONTAR DESDE POSICIÓN 
  //0 , por lo que le sumo un 1.
   
   }else{ //si el index of del elemento es -1 significa que no existe en el array 
   	//por lo que le digo que retorne 0 como dice el enunciado.
     return 0;
   }
 }
  
console.log(seatNumber(lista,"pedro"));




//---------------------- ejercicio 11 [facil]-------------------------------------------------
 
/*Problema fácil 11 (20 puntos):
Diseñar un programa que lea las calificaciones de un alumno 
(10 notas en total). Debes calcular e imprimir su promedio, y decir a
 través de un alert si el ramo fue 
aprobado o no. Las notas van de 1 a 7 y se aprueba con un promedio 
igual o mayor a 4. */

//---------------------- ejercicio 12 [facil]-------------------------------------------------
/*Realizar un programa que permita analizar si una palabra que el usuario introduce por 
teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante hacia atrás como de atrás hacia 
adelante. Ejemplo: Amalama*/


//---------------------- ejercicio 13  [facil]-------------------------------------------------

/*Dado dos string (palabra1 y palabra2) escribir una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.
Una palabra es anagrama de otra cuando contiene las mismas letras en un orden distinto.
Ejemplo: la palabra anagrama es un anagrama de la palabra anmgraaa*/


//---------------------- ejercicio 14 [facil]-------------------------------------------------

//Dado un arreglo de 10 números, retornar un nuevo arreglo solo con los números pares.

//---------------------- ejercicio 15 [facil]-------------------------------------------------
//Dado un arreglo de 4 números positivos, devolver un nuevo arreglo con cada 
//elemento multiplicado por 12.

var arrPositiv = [1,2,3,4];

function multiplication (arr){ //le damos el nombre a la funcion y su parametro 
	var newArray = []; // creamos una variable dentro de la funcion para que se almacene aqui los nuevos elementos multiplicados
	for( i=0; i<arr.length; i++; ){ //creamos el for para que haga el recorrido uno por uno
     newArray.punsh(arr[i]*12); //luego con el metedo punsh le ingresamos el elemnto a newArray y lo multiplicamos *12
 	}return newArray; //retorna en el nuevo array los elementos multiplicados
}

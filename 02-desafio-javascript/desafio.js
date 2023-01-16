/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

const objetoPerson = {
  nombre: "Felipe",
  edad: "38",
  altura: "1.78",
}
//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

 function largoDelNombre(nombre = "") {
  var contador = 0;
    if (typeof nombre == "string") {
      for (let i = 0; i < nombre.length; i++) {
        contador= contador+1;
      }
      if(contador >= 0 && contador <=5){
        console.log("Es un nombre corto. Su largo es de: "+contador);
      }else if (contador >= 11){
        console.log("Es un nombre largo. Su largo es de: "+contador);
      }else{
        console.log("Su largo es de: "+contador);
      }
    }else{
      console.log("El parámetro recibido es invalido");
    }
    return;
  }
//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {
  var contador = 0;  
      for (let i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] === 'number' && !Number.isNaN(arreglo[i])) {
          contador= contador+1;
        }else{
          console.log("Elemento no es de tipo number: "+arreglo[i]);
        }
      }
      console.log("Cantidad de valores de tipo number: "+contador);
return;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */


function datosPersona(objPer = {}) {
  var name = objPer.nombre;
  var age = objPer.edad;
  var height = objPer.altura;
  var plantilla= `Esta persona se llama ${name}, tiene ${age} años y su altura es de ${height}`;
  console.log(plantilla);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

function obtenerCantidadDePares(numero1, numero2) {
  var contador = 0;
  if (!isNaN(numero1) && !isNaN(numero2)){
    for (; numero1 <=numero2; numero1++) {
      console.log("Evaluando: "+numero1);
      if (numero1 % 2 == 0) {
        console.log("Es par: "+numero1);
        contador++;
      }else{
        console.log("Es impar: "+numero1);
      }
    }
    console.log("La cantidad de números pares obtenido fue de: "+contador);
  }else{
    console.log("El parámetro recibido es invalido");
  }
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

function obtenerCantidadDeSedes(econtact = {}) {
  var keysSedes= Object.keys(objetoFijo.datos.sedes);
  var lenSedes=keysSedes.length;
  console.log("La cantidad de sedes que posee es: "+lenSedes);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

function obtenerTelefonoPeru(econtact = {}) {
  if(econtact.datos.sedes.Peru.telefono != null){
      console.log("Perú tiene asignado teléfono:"+econtact.datos.sedes.Peru.telefono);
  }else{
      console.log("Perú no tiene asignado un teléfono");
  }
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(objetoFijo = {}) {
  var arrayValueSedes=Object.values(objetoFijo.datos.sedes);
  var contador=0;

  for (let i = 0; i < arrayValueSedes.length; i++) {
    if(arrayValueSedes[i].telefono != null){
      contador++;
    }
  }
  console.log("La cantidad de paises con telefono asignado son: "+contador);
  
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

function calculoMatematico(operacion, numero1, numero2) {
  var resultado=0;
  switch (operacion) {
    case "+":
      resultado=numero1+numero2;
      console.log("La suma es igual a ="+resultado);
      break;
    case "-":
      resultado=numero1-numero2;
      console.log("La resta es igual a ="+resultado);
      break;
    case "*":
      resultado=numero1*numero2;
      console.log("La multiplicacion es igual a ="+resultado);
      break;
    case "/":
     resultado=numero1/numero2;
     console.log("La division es igual a ="+resultado);
      break;
    default:
      console.log("La operación matemática que intenta realizar es inexistente");
      break;
  }

}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */
var arrayNum = new Array;
function cargarArreglo(numero) {
  var numDoble=numero*2;
  if(numero>0){
    while(numero!=numDoble){
      arrayNum.push(numero);
      break;
    }
    console.log("Arreglo final ="+arrayNum);
    return arrayNum;
  }else{
    console.log("El número ingresado debe ser mayor a 0");
  }
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

function divisiblesPorCinco(numeros = []) {
  var contador=0;

  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 5 == 0){
      contador++;
      console.log("El numero : "+numeros[i]+ " es divisible por 5.");
    }
  }
  console.log("La cantidad de numeros divisibles por 5 son: "+contador);
}
  
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {
  var resultado=0;

  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] === 'number' && !Number.isNaN(numeros[i])) {
      resultado=resultado+numeros[i];
    }else{
      console.log("Un parámetro recibido es invalido. No sera considerado en la sumatoria.");
    }
  }
  console.log("La sumatoria es igual a: "+resultado);
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

function verificarCantidadEmpleados(objetoFijo = {}) {
  var arrayValueSedes=Object.values(objetoFijo.datos.sedes);
  var totalEmpleados=objetoFijo.datos.empleados;
  var contador=0;
  var sumaEmpleados=0;
  var totalesIguales=false;

  console.log("La cantidad de empleados en E-Contact es: "+totalEmpleados);

  for (let i = 0; i < arrayValueSedes.length; i++) {
      sumaEmpleados=sumaEmpleados+arrayValueSedes[i].empleados;
  }
  console.log("La sumatoria de los empleados de las sedes es: "+sumaEmpleados);

  if(totalEmpleados == sumaEmpleados){
    totalesIguales=true;
    console.log("La cantidad de empleados en E-Contact es igual a la sumatoria de los empleados de las sedes: "+sumaEmpleados);
  }else{
    console.log("La cantidad de empleados en E-Contact --> "+totalEmpleados+" NO es igual a la sumatoria de los empleados de las sedes--> "+sumaEmpleados);
  }
  return totalesIguales;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arregloFijo = []) {
  var lenArrayFijo=arregloFijo.length;
  var arrayCuadrado= [];

  for (let i = 0; i < lenArrayFijo; i++) {
    arrayCuadrado.push(arregloFijo[i]**2);
    console.log("Nuevo valor al cuadrado agregado a arrayCuadrado: "+arrayCuadrado[i]);
  }
  console.log("El arreglo con los numeros al cuadrado del arregloFijo es: "+arrayCuadrado);
return arrayCuadrado;

}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

function validarArreglo(numeros = []) {
  var lenArrayNumeros=numeros.length;
  var validaFlag=false;
  var resultado=0;

  if(lenArrayNumeros<6){
    validaFlag= false;
    console.log("El total de elementos del arreglo no supera el minimo correspondiente a 6. Actualmente posee: "+lenArrayNumeros);
  }else{  
    for (let i = 0; i < lenArrayNumeros; i++) {
      resultado=resultado+numeros[i];
    }
  
    if(resultado > 100){
      validaFlag= true;
    }
    console.log("El total de la suma de los elementos del arreglo es: "+resultado);
  }
return validaFlag;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

function validarNombre(nombres = [], nombre) {
  var validaFlag=false;
  var nombreUpper=nombre.toUpperCase();
  var arrayNombresUpperCase=nombres.map(element => element.toUpperCase());

  for (let i = 0; i < arrayNombresUpperCase.length; i++) {
    console.log("Nombre ingresado:"+nombreUpper);
    console.log("Nombre arreglo pos["+i+"]: "+arrayNombresUpperCase[i]);
      if(arrayNombresUpperCase[i] == nombreUpper){
        validaFlag= true;
        console.log("Nombre ingresado existe en arreglo de nombres");
        break;
      }
  }
 
return validaFlag;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

function devolverPosicion(numeros = [], numero) {
  var posNombre;

  for (let i=0; i < numeros.length; i++) {
    console.log("Numero ingresado:"+numero);
    console.log("Numero arreglo pos["+i+"]: "+numeros[i]);
      if(numeros[i] == numero){
        validaFlag= true;
        posNombre = i;
        console.log("Numero ingresado existe en arreglo de numeros, posicion: "+posNombre);
        return posNombre;
        break;
      }
  }

}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

function verificarSector(objetoFijo = {}, sector) {
  var arrayValueSectores=Object.values(objetoFijo.datos.sectores);
  var validaFlag=false;

  for (let i = 0; i < arrayValueSectores.length; i++) {
    console.log("Sector ingresado:"+sector);
    console.log("Sector arreglo pos["+i+"]: "+arrayValueSectores[i]);
      if(arrayValueSectores[i] == sector){
        validaFlag= true;
        console.log("Sector ingresado existe en arreglo de sectores.");
        break;
      }
  }
  return validaFlag;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

function verificarCantidadEmpleados(objetoFijo = {}, cantidad) {
  var arrayValueSedes=Object.values(objetoFijo.datos.sedes);
  var arrayKeysSedes=Object.keys(objetoFijo.datos.sedes);
 // var totalEmpleados=objetoFijo.datos.empleados;
  var contador=0;

  for (let i = 0; i < arrayValueSedes.length; i++) {
    if(arrayValueSedes[i].empleados<cantidad){
      console.log("Sede arreglo con cantidad de empleados MENOR que segundo parametro pos["+i+"]: "+arrayKeysSedes[i]);
      contador++;
    }else{
      console.log("Sede arreglo con cantidad de empleados IGUAL O MAYOR que segundo parametro pos["+i+"]: "+arrayKeysSedes[i]);
    }
  }
  console.log("La cantidad de sedes con menor cantidad establecida comparada con segundo parámetro es: "+contador);
  
  return contador;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

function verificarClave(objeto = {}, clave) {
  var validaFlag=false;
  if(objeto.hasOwnProperty(clave)){
    console.log("La clave "+clave+" esta presente en el objeto.");
    validaFlag=true;
  }
  return validaFlag;
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(numerosReales = []) {
  var lenArrayFijo=numerosReales.length;
  var arraySinDecimal= [];
  var numSinDecimal=0;

  for (let i = 0; i < lenArrayFijo; i++) {
    numSinDecimal=Math.trunc(numerosReales[i]);
    console.log("Numero antes del cambio:"+numerosReales[i]+" .Nuevo valor modificado sin decimal: "+numSinDecimal);
    arraySinDecimal.push(numSinDecimal);
  }
return arraySinDecimal;
}

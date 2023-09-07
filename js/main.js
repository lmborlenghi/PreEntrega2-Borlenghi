let numeros = "Numeros";
let chance = "Chance";
let rojo = "Rojo";
let negro = "Negro";
let cero = "Sin Color";
let apuesta = 0;
let apuestaColor = 0;
let numero = 0;
let numeroApostado = 0;
let colorApuesta = 0;
let parOimpar = 0;
let eleccionParImpar = 0;
let columna = 0;
let eleccionColumna = 0;
let docena = 0;
let eleccionDocena = 0;




// Definir los números negros en la ruleta
const numerosBlack = {
    numeros: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    color: 'negro'
  };
  // Definir los números rojos en la ruleta
const numerosRed = {
    numeros: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, ,27, 30, 32, 34, 36],
    color: 'rojo'
  };

  // Definir los números pares en la ruleta
const numerosPares = {
    numeros: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    caracteristica: 'Par'
  };
  // Definir los números impares en la ruleta
const numerosImpares = {
    numeros: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    caracteristica: 'Impar'
  };

  // Definir los números en la primera docena
const primeraDocena = {
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    descripcion: 'Primera Docena'
  };
  // Definir los números en la segunda docena
const segundaDocena = {
    numeros: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    descripcion: 'Segunda Docena'
  };
  const terceraDocena = {
    numeros: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    descripcion: 'Tercera Docena'
  };

  // Definir los números en la primera columna
const primeraColumna = {
    numeros: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    descripcion: 'Primera Columna'
  };
  // Definir los números en la segunda columna
  const segundaColumna = {
    numeros: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    descripcion: 'Segunda Columna'
  };
  // Definir los números en la tercera columna
const terceraColumna = {
    numeros: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    descripcion: 'Tercera Columna'
  };

const numeroCero = {
    numeros: [0],
    descripcion: 'Cero'
};


// INICIA EL JUEGO Y PREGUNTA SI QUEREMOS JUGAR. AL finalizar el ciclo vuelve a preguntar si queremos jugar otra vez.

let juega = prompt ("JUEGA? Ingrese Si o No");
    while (juega.toUpperCase() == "SI"){


    //INGRESAR APUESTA -----------------------------------------------------------------------------------------------
    let apuestaJ1 = prompt("Indique cuanto quiere apostar: ");
    while (apuestaJ1 > 100000){
    alert("No puede apostar mas de $100.000");
    apuestaJ1 = prompt("Indique cuanto quiere apostar: ");
    }
    console.log("Jugador apuesta: $ "+ apuestaJ1);


    //ELEGIR DONDE APOSTAR: NUMERO, COLOR, PAR/IMPAR, COLUMNA, DOCENA (EN UNA FUNCION) --------------------------------
    function dondeApostar() {
    let eleccionJ1 = prompt("Apuesta a:\n1 - Numeros \n2 - Color \n3 - Par o Impar \n4 - Columna \n5 - Docena");
    while ((eleccionJ1 != 1) && (eleccionJ1 != 2) && (eleccionJ1 != 3) && (eleccionJ1 != 4) && (eleccionJ1 != 5)){
        alert("Debe elegir una opcion");
        eleccionJ1 = prompt("Apuesta a:\n1 - Numeros \n2 - Color \n3 - Par o Impar \n4 - Columna \n5 - Docena");      
    }
        if (eleccionJ1==1) {
            console.log("Eligio apostar a numeros");
            let apuesta = prompt ("Indique un numero del 0 al 36");
            while ((apuesta>36) || (apuesta<0)){
                alert("Debe elegir un numero entre 0 y 36");
                apuesta = prompt("Indique un numero del 0 al 36");
            }
            numeroApostado=apuesta;
            console.log("Jugador apuesta al numero: " + apuesta);
            }
        else if (eleccionJ1==2) {
            let apuestaColor = prompt ("Indique Rojo o Negro");
            colorApuesta = apuestaColor;
            console.log("Eligio apostar a color: " + apuestaColor);
        }
        else if (eleccionJ1==3) {
            let parOimpar = prompt ("Par o Impar");
            eleccionParImpar=parOimpar;
            console.log("Eligio: " + parOimpar);
        }

        else if (eleccionJ1==4) {
            let columna = prompt ("1ra, 2da o 3ra");
            eleccionColumna = columna;
            console.log("Eligio: " + columna + " columna");
        }

        else if (eleccionJ1==5) {
            let docena = prompt ("1ra, 2da o 3ra");
            eleccionDocena = docena;
            console.log("Eligio: " + docena + " docena");
        }

    }
    dondeApostar();





    //FUNCION PARA GENERAR NUMERO ALEATORIO ENTRE 0 Y 36 => TIRO DE RULETA! ------------------------------------------------
    function getRandom() {
    let num = Math.floor(Math.random() * 37);
    numero = num;
    //alert("El numero de la ruleta fue: " + num);
    console.log("El numero de la ruleta fue: " + num);        
    }
    getRandom();

    //no es necesario, es para checkear q ande la variable
    //console.log("******* NUMERO (chequeo variable) = " + numero);



    // Comparar el número aleatorio con las categorías definidas
    //ROJO O NEGRO
    if (numerosBlack.numeros.includes(numero)) {
    console.log(`El número ${numero} es Negro.`);
    } else if (numerosRed.numeros.includes(numero)) {
    console.log(`El número ${numero} es Rojo.`);
    }
    //PAR O IMPAR
    if (numerosPares.numeros.includes(numero)) {
        console.log(`el Numero ${numero} es Par.`);    
    } else if (numerosImpares.numeros.includes(numero)) {
        console.log(`el Numero ${numero} es Impar.`);
    }
    // DOCENAS
    if (primeraDocena.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${primeraDocena.descripcion}.`);
    } else if (segundaDocena.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${segundaDocena.descripcion}.`);
    } else if (terceraDocena.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${terceraDocena.descripcion}.`);
    }
    //COLUMNAS
    if (primeraColumna.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${primeraColumna.descripcion}.`);
    } else if (segundaColumna.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${segundaColumna.descripcion}.`);
    } else if (terceraColumna.numeros.includes(numero)) {
    console.log(`El número ${numero} está en la ${terceraColumna.descripcion}.`);
    }
    //CERO
    if (numeroCero.numeros.includes(numero)) {
        console.log(`El número es ${numeroCero.descripcion}`);
    }


    /* // Si el número no coincide con ninguna categoría o docena
    if (!numerosBlack.numeros.includes(numero) &&
        !numerosRed.numeros.includes(numero) &&
        !numerosPares.numeros.includes(numero) &&
        !numerosImpares.numeros.includes(numero) &&
        !primeraDocena.numeros.includes(numero) &&
        !segundaDocena.numeros.includes(numero) &&
        !terceraDocena.numeros.includes(numero) &&
        !primeraColumna.numeros.includes(numero) &&
        !segundaColumna.numeros.includes(numero) &&
        !terceraColumna.numeros.includes(numero)) {
    console.log(`El número ${numero} no pertenece a ninguna categoría definida.`);
    } */


    

    //CONDICIONES PARA GANAR APUESTAS---------------------------------------------------------------------------------------
    
    //PLENO
    if (numeroApostado == numero) {
        console.log("PLENO!! GANA: $" + (apuestaJ1*36));
    }
    
    //CONDICION PARA GANAR ROJO O NEGRO
    if ((numerosBlack.numeros.includes(numero)) && (colorApuesta=="Negro")) {
    console.log("Apuesta negro y Sale Negro. GANA: $" + (apuestaJ1*2));
    } else if ((numerosRed.numeros.includes(numero)) && (colorApuesta=="Rojo")) {
        console.log("Apuesta rojo y Sale Rojo. GANA: $" + (apuestaJ1*2));
    }

    //CONDICION PARA GANAR PAR O IMPAR
    if ((eleccionParImpar == "Par") && (numero%2===0)) {
        console.log("Apostó Par y salió Par! Gana: " + (apuestaJ1*2));
    } else if ((eleccionParImpar == "Impar") && (numero%2===1)) {
        console.log("Apostó Impar y salió Impar! Gana: " + (apuestaJ1*2));
    }

    //CONDICION PARA GANAR COLUMNA
    if ((primeraColumna.numeros.includes(numero)) && (eleccionColumna == "1ra")) {
        console.log("Apostó 1ra Columna y salió 1ra Columna! Gana: " + (apuestaJ1*3));
    } 
    if ((segundaColumna.numeros.includes(numero)) && (eleccionColumna == "2da")) {
        console.log("Apostó 2da Columna y salió 2da Columna! Gana: " + (apuestaJ1*3));
    }
    if ((terceraColumna.numeros.includes(numero)) && (eleccionColumna == "3ra")) {
        console.log("Apostó 3ra Columna y salió 3ra Columna! Gana: " + (apuestaJ1*3));
    }  

    //CONDICION PARA GANAR COLUMNA
    if ((primeraDocena.numeros.includes(numero)) && (eleccionDocena == "1ra")) {
        console.log("Apostó 1ra Docena y salió 1ra Docena! Gana: " + (apuestaJ1*3));
    } 
    if ((segundaDocena.numeros.includes(numero)) && (eleccionDocena == "2da")) {
        console.log("Apostó 2da Docena y salió 2da Docena! Gana: " + (apuestaJ1*3));
    }
    if ((terceraDocena.numeros.includes(numero)) && (eleccionDocena == "3ra")) {
        console.log("Apostó 3ra Docena y salió 3ra Docena! Gana: " + (apuestaJ1*3));
    }  

    





    juega = prompt("Juega otra vez? Si - No");
}



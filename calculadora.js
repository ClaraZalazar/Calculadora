const process = require("process");
const operacionesValidas = ["+", "-", "*", "/"];
const num1 = process.argv[2]
const operación = process.argv[3]
const num2 = process.argv[4]

if(operacionesValidas.includes(operación)){
    const cálculo = num1 + operación + num2
    const resultado = eval(cálculo)
    console.log(resultado);
    console.log("PUEDES SEGUIR AVANZANDO");
}else{
    console.log("Esta calculadora sólo realiza las 4 operaciones básicas, vuelve a intentar con +, -, * o /, entre comillas por favor");
}

// creo que anda con el bloque de código hasta acá, pero dejo los require para respetar la consigna :)
// no modifica el resultado por consola

const sumar = require("./suma");

//console.log(sumar(2, 3)); 
//console.log(sumar(10, 5)); 

const restar = require("./resta");

//console.log(restar(5, 2)); 
//console.log(restar(8, 4));

const multiplicar = require("./multiplicación");

//console.log(multiplicar(2, 4));
//console.log(multiplicar(3, 5));

const dividir = require("./división");

//console.log(dividir(2, 3));
//console.log(dividir(6, 0));

// comenté porque al principio hice con valores estáticos y funcionaba, pero luego implementé lo que
// Ema mostró en clase y también funcionó, lo dejo así pero estoy pensando que
// queda como al pepe requerir las funciones que hice en los otros archivos... lo dejo igual...
// quizas puedo poner un process en cada function para que ingresen por consola los valores de parámetros
// esa sería otra forma, pero lo dejo así que fue una victoria que me salga esto...
// y que sea más dinámico que dejar los valores estáticos... 

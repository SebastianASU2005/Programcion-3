"use strict";
console.log("Ejercicio 2: coorre desde el tsc");
const texto = "Hola Mundo";
const number = 1234;
const condicional = true;
const fecha = new Date();
document.write(`
    Texto: ${texto} <br>
    Numero: ${number} <br>
    Booleano: ${condicional}<br>
    Fecha: ${fecha}<br>
    <br>
    `);
function convertirString(number) {
    document.write(`Numero sin convertir ${number}<br>`);
    number.toString();
    document.write(`Numero Convertido a cadena: ${number}<br>
        <br>`);
}
convertirString(10);
let arrayNumeros = [1, 2, 3, 4];
function sumarArray(array) {
    let suma = 0;
    array.forEach(array => {
        suma += array;
    });
    document.write(`Suma de numeros del array: ${suma} <br>
    <br>`);
}
sumarArray(arrayNumeros);
let estudiante = {
    nombre: 'juan',
    edad: 20,
    curso: 'matematicas'
};
document.write(`
    Nombre: ${estudiante.nombre} <br>
    Edad: ${estudiante.edad} <br>
    Curso: ${estudiante.curso}<br>
    <br>
    `);
const loca = {
    street: 'Av.Principal',
    city: 'Ciudad',
    postalCode: 12345
};
document.write(`
    Direccion <br>
    Calle: ${loca.street} <br>
    Ciudad: ${loca.city} <br>
    CP: ${loca.postalCode}<br>
    <br>
    `);
const usuario = {
    name: 'Juan',
    mail: "hola@gmail.com",
    saludar: function () {
        return (`Hola, mi nombre es ${usuario.name} <br>`);
    }
};
document.write(usuario.saludar());
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(nombre, edad) {
        return (`Hola mi nombre es ${nombre} y tengo ${edad} años <br> <br>`);
    }
}
const persona1 = new Persona('Juan', 23);
document.write(persona1.saludar(persona1.nombre, persona1.edad));
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
function mostrarValores() {
    const cajaString = new Caja("Hola, mundo!");
    const cajaNumber = new Caja(42);
    const valorString = cajaString.obtenerValor();
    const valorNumber = cajaNumber.obtenerValor();
    document.write(`
        Valor en String: ${valorString} <br>
        Valor en number: ${valorNumber}
        <br>`);
}
mostrarValores();

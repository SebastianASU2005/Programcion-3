console.log("Ejercicio 2: coorre desde el tsc");
//ejercicio 3
const texto: string ="Hola Mundo";
const number: number=1234;
const condicional: boolean=true;
const fecha: Date=new Date();
document.write(`
    Texto: ${texto} <br>
    Numero: ${number} <br>
    Booleano: ${condicional}<br>
    Fecha: ${fecha}<br>
    <br>
    `)
//ejercicio 4
function convertirString(number:number){
    document.write(`Numero sin convertir ${number}<br>`)
    number.toString()
    document.write(`Numero Convertido a cadena: ${number}<br>
        <br>`)
}
convertirString(10);
//ejercicio 5
let arrayNumeros=[1,2,3,4]

function sumarArray(array:Array<number>){
    let suma=0
array.forEach(array => {
    suma+=array;
});
document.write(`Suma de numeros del array: ${suma} <br>
    <br>`)
}

sumarArray(arrayNumeros)
//ejercicio 6
let estudiante ={
    nombre:'juan',
    edad: 20,
    curso: 'matematicas'
}
document.write(`
    Nombre: ${estudiante.nombre} <br>
    Edad: ${estudiante.edad} <br>
    Curso: ${estudiante.curso}<br>
    <br>
    `)
//ejercicio 7
type Addres={
street:string,
city:string,
postalCode:number,
}
const loca:Addres={
street:'Av.Principal',
city:'Ciudad',
postalCode:12345
}
document.write(`
    Direccion <br>
    Calle: ${loca.street} <br>
    Ciudad: ${loca.city} <br>
    CP: ${loca.postalCode}<br>
    <br>
    `)
//ejercicio 8
interface Usuario{
    name:string
    mail:string
    saludar():string
}
const usuario :Usuario={
    name:'Juan',
    mail:"hola@gmail.com",
    saludar:function(){
        return (`Hola, mi nombre es ${usuario.name} <br>`)
    }
}
document.write(usuario.saludar())

//ejercicio 9
class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    saludar(nombre:String, edad:number){
        return(`Hola mi nombre es ${nombre} y tengo ${edad} años <br> <br>`)
    }
}
const persona1=new Persona('Juan',23)
document.write(persona1.saludar(persona1.nombre,persona1.edad))
//ejercicio 10
class Caja<T> {
    private valor: T;
    constructor(valor: T) {
        this.valor = valor;
    }
    obtenerValor(): T {
        return this.valor;
    }
}
function mostrarValores() {
    const cajaString = new Caja<string>("Hola, mundo!");
    const cajaNumber = new Caja<number>(42);

    const valorString = cajaString.obtenerValor();
    const valorNumber = cajaNumber.obtenerValor();

    document.write(`
        Valor en String: ${valorString} <br>
        Valor en number: ${valorNumber}
        <br>`)
}
mostrarValores()
//ejercicio11

function identidad<T>(dato: T) {
    return dato;
}
document.write(`<br> identidad de numero: ${identidad(123)} 
                <br> identidad del texto: ${identidad('texto')}`)

//ejercicio12
enum color {
    'rojo',
    'verde',
    'amarillo'
}
let variable = color[2];
document.write(`<br> color favorito: ${variable}`)
console.log("desde el archivo externo");

console.error("Error, fatal error");

console.warn("Warning");

console.log("****Variables****");

let nombre = 'Luciano';
let apellido = 'Signorelli';
let edad = '23';
let nombreCompleto = "Luciano Signorelli";

let nombreCompleto2 = "nombre + ' ' + apellido"

// No se usa var, se usa let para las variables


console.log(nombre);
console.log(apellido);
console.log(edad);


nombre = 34;

console.log(nombreCompleto);
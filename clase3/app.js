

//FOR EACH


//let peliculas = ["Kill Bill","Pulp Fiction", "Jackie Brown"]

/*
peliculas.forEach(function(elemento, posicion){
    //String interpolation
    console.log(`En la posicíon ${posicion} el elemento es: ${elemento}`);
})
*/

//console.log("Las peliculas que tengo en este listado son " + peliculas.join(" "));

//MAS FOR EACH, FILTER Y MAP

/*
let numeros = [1, 2, 3];

let arrayForEacheado = [];
numeros.forEach(function(elemento){
    arrayForEacheado.push(elemento + 5)
})

console.log(arrayForEacheado);


let arrayMapeado = numeros.map(function(elemento){
    return elemento + 5
})

console.log(arrayMapeado);


let numeros = [1, 2, 3, 10, 11, 12];

let arrayFiltrado = numeros.filter(function(elemento){
    return elemento >= 10;
})
console.log(arrayFiltrado);
*/

// REDUCE

/*
let otroArray = [10, 20, 30];

let megaResultado = otroArray.reduce(function(acumulador, elemento){
    return acumulador + elemento
}, 0);

console.log(megaResultado);
*/

/*
let unObjeto = {
nombre: "Leia",
apellido: "Organa"

}

for(let laPropiedad in unObjeto){
    console.log(`Su ${laPropiedad} es ${unObjeto[laPropiedad]}`);
    
}

let listadoDePeliculas = ["Kill Bill","Pulp Fiction", "Jackie Brown"]

for (let pelicula in listadoDePeliculas) {
    console.log(listadoDePeliculas[pelicula]);
       
}


let frase = "Ad lorem ipsum";
for (let letra in frase) {
    console.log(frase[letra]);
    
}
*/




/*
let listadoDePeliculas = ["Kill Bill","Pulp Fiction", "Jackie Brown"]

for (let pelicula of listadoDePeliculas) {
    console.log(pelicula);
       
}


let frase = "Ad lorem ipsum";
for (let letra of frase) {
    console.log(letra);
    
}
*/

//DATE
/*
let unaFecha = new Date();

console.log(unaFecha.toLocaleString());
*/

/*
function sumar(...numeros) {
	let resultado = numeros.reduce(function(acumulador, elemento) {
		return acumulador + elemento;
	}, 0);
	return resultado
}
​
console.log( sumar(1, 2, 3, 4, 5, 6, 7, 8, 9) )
*/


/*
let unObjetoCualquiera = {
    genero: "Femenino",
    edad: 25
}

let otroObjeto = {
    nombre: "Leia",
    apellido: "Organa",
    ...unObjetoCualquiera
}


let esteObjeto = {
    ...otroObjeto
}

console.log(esteObjeto);

*/
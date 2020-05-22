function Auto(marca, modelo,color,anio,km,precio,cuotas,patente,vendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color,
    this.anio = anio,
    this.km = km,
    this.precio = precio,
    this.cuotas = cuotas,
    this. patente = patente,
    this.vendido = vendido
};

let autos = [];
let miAuto  = new Auto ['Ford', 'Fiesta' ,'Azul', 2019,  200, 150000, 12 ,  'APL123', false];

autos.push(miAuto);

 miAuto  = new Auto ['Toyota', 'Corolla' ,'Blanco', 2019,  0, 100000, 14 ,  'JJK116', false];

autos.push(miAuto);

module.exports = constructorAutos;

const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    filtrarPorEstado: function  (estado){
        let tareas = this.leerJSON();

        let tareasFiltradas = tareas.filter(function(elemento){
            return estado === elemento.estado
 
        }) 
        return tareasFiltradas
    },
}

module.exports = archivoTareas;
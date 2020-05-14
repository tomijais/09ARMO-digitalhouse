let fs = require("fs");
let process = require("process");

let comando = process.argv[2]; // ["0","2"."3"]

let listaDeTareas = fs.readFileSync("./tareas.json", "utf-8");
let tareasFinales = JSON.parse(listaDeTareas);

switch (comando) {
  case "listar":
    console.log("Esta es tu lista de tareas");
    console.log("---------------------------");

    for (let i = 0; i < tareasFinales.length; i++) {
      console.log(
        tareasFinales[i].titulo +
          " estado " +
          tareasFinales[i].estado
      );
    }
    break;
  case 'crear':
    let tituloDeLaTarea = process.argv[3];
    let tarea = {
      titulo: tituloDeLaTarea,
      estado: "pendiente",
    };
    tareasFinales.push(tarea);
    let nuevoListadoDeTareas = JSON.stringify(tareasFinales);
    fs.writeFileSync("./tareas.json", nuevoListadoDeTareas, 'utf-8');
    console.log('Tu tarea fue creada crack');
    
    break;
  case undefined:
    console.log("Tenés que utilizar alguno de estos comandos");
    console.log("- listar");
    break;
  default:
    console.log("Este comando no esta disponible");
}

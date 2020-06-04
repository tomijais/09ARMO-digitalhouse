const http = require('http');
const fs = require('fs');

const peliculas = fs.readFileSync("./peliculas.json", "utf-8");
const peliculasPARSE = JSON.parse(peliculas)
const teatros = fs.readFileSync("./theaters.json","utf-8");
const teatrosPARSE = JSON.parse(teatros)
const faqs = fs.readFileSync("./faqs.json","utf-8");
const faqsPARSE = JSON.parse(faqs)

let peliculasEnOrden = []

for (let i = 0; i < peliculasPARSE.length; i++) {

	peliculasEnOrden.push(peliculasPARSE[i].title)
}

peliculasEnOrden.sort();






// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':
			res.write( '<h1>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores  películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.</h1>');

			res.write(`<h2>Tenemos la modica cantidad de ${peliculasPARSE.length} peliculas </h2>`);

			res.write(`<h3>Nuestras peliculas son: <br/> ${peliculasEnOrden.join('<br/>')}</h3>`)

			res.end(`​Recordá que podés visitar las secciones: <br/> i. En Cartelera  <br/> ii. Más Votadas  <br/> iii. Sucursales  <br/> iv. Contacto  <br/> v. Preguntas Frecuentes`)
			break;
		// En cartelera
		case '/en-cartelera':
			res.write( '<h1>En cartelera.</h1>');
			res.write(`<h2>Tenemos la modica cantidad de ${peliculasPARSE.length} peliculas </h2>`);

			for (let i = 0; i < peliculasPARSE.length; i++) {
				res.write(`<h3>${peliculasPARSE[i].title}</h3>`);
				res.write(`<h4>${peliculasPARSE[i].overview}</h4
				>`);
				
			}


			break;
		case '/mas-votadas':
			res.end('Más Votadas');
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end(faqs);
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
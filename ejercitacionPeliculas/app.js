const http = require('http');
const fs = require('fs');

const peliculas = fs.readFileSync("./peliculas.json", "utf-8");
const peliculasPARSE = JSON.parse(peliculas)
const salas = fs.readFileSync("./salas.json","utf-8");
const salasPARSE = JSON.parse(salas)
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
			res.write('<h1>Peliculas mas votadas:<h1/>')
			let contadorPeliculasMasVotadas = 0;
			let sumaDeRatingsPeliculasMasVotadas = 0;
			for (let i = 0; i < peliculasPARSE.length; i++) {

				if(peliculasPARSE[i].vote_average >= 7){
					res.write(`<h2>${peliculasPARSE[i].title}</h2>`);
					contadorPeliculasMasVotadas++
					sumaDeRatingsPeliculasMasVotadas = parseInt(sumaDeRatingsPeliculasMasVotadas) + peliculasPARSE[i].vote_average
				}
			}
			res.write(`<h3>Tenemos ${contadorPeliculasMasVotadas} peliculas que tienen un rating mayor o igual a 7</h3>`);
			res.write(`<h4>El promedio de rating de estas peliculas es de ${sumaDeRatingsPeliculasMasVotadas/contadorPeliculasMasVotadas}</h4>`);


			for (let i = 0; i < peliculasPARSE.length; i++) {
				res.write(`<h5>${peliculasPARSE[i].title}</h5>`);
				res.write(`<h6>${peliculasPARSE[i].overview}</h6>`);
				res.write(`<p>Puntaje: ${peliculasPARSE[i].vote_average}<p/>`)
				
			}

			break;
		case '/sucursales':
			res.write('<h1>Sucursales<h1/>');
			res.write(`<h2>Tenemos ${salasPARSE.length} salas en total</h2>`);

			for (let i = 0; i < salasPARSE.length; i++) {
				res.write(`<h3>${salasPARSE[i].name}</h3>`);
				res.write(`<h4>${salasPARSE[i].address}</h4>`);
				res.write(`<h5>Puntaje: ${salasPARSE[i].description}<h5/>`)
				
			}
			

			break;
		case '/contacto':
			res.write('<h1>Contáctanos<h1/>');
			res.end('<p>¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email: dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.<p>')


			break;
		case '/preguntas-frecuentes':
			res.write('<h1>Preguntas Frecuentes<h1/>');
			res.write(`<h2>El total de preguntas es de: ${faqsPARSE.length}<h2/>`)


			for (let i = 0; i < faqsPARSE.length; i++) {
				res.write(`<h3>${faqsPARSE[i].faq_title}</h3>`);
				res.write(`<h4>${faqsPARSE[i].faq_answer}</h4>`);
			}
			break;			
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));
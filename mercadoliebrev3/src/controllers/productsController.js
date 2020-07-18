const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let ultimoId = function(array) {
	let contador = array[0].id;
	for(let i = 0; i < array.length; i++) {
		if(array[i].id > contador) {
			contador = array[i].id;
		}
	}
	return contador
}

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products', {
			products: products
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.productId) {
				return res.render('detail', {
					product: products[i]
				});
			}
		}
		res.send('No encontramos un producto con esas características');
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let nuevoProducto = {
			id: ultimoId(products) + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description
		};
		products.push(nuevoProducto);
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products));
		res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.productId) {
				return res.render('product-edit-form', {
					product: products[i]
				});
			}
		}
		res.send('No encontramos un producto con esas características');
	},
	// Update - Method to update
	update: (req, res) => {
		for(let i = 0; i < products.length; i++) {
			if(products[i].id == req.params.productId) {
				products[i] = req.body;
				fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products));
				res.redirect('/products');
			}
		}
		res.send('No encontramos un producto con esas características');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let idProductoEliminar = req.params.productId;
		let productosNuevos = products.filter(function(elemento){
			return elemento.id != idProductoEliminar;
		})
		fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(productosNuevos));
		res.redirect('/products')
	}
};

module.exports = controller;
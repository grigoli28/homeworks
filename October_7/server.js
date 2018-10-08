const express = require('express');
const path = require('path');
const App = express();

const PORT = 3000;

let id = 1;


let productsDB = [
    { id: id++, name: "Porsche", price: 3200000 },
    { id: id++, name: "Ferrari", price: 3100000 },
    { id: id++, name: "Aston Martin", price: 3000000 }
];


App.set('view engine', 'pug');
App.set('views', './src/views');

App.use(express.static(path.join(__dirname, 'public')));
App.use(express.urlencoded({ extended: true }));


App.get('/', (req, res) => {
    res.render('index', { title: "Demo Title", added: false, productsDB });
});


App.post('/', (req, res) => {
    const { name, id, price } = req.body;
    productsDB.push({
        name,
        id,
        price
    });
    res.render('index', { title: "Demo Title", added: true, productsDB });
});


App.get('/products', (req, res) => {
    res.render('products', { productsDB });
});


App.get('/products/:id(\\d)', (req, res) => {
    const id = Number(req.params.id);
    const product = productsDB.find(prod => prod.id == id);
    res.render('product', { product });
});


App.listen(PORT, () => {
    console.log(`Server PORT - ${PORT}`);
});
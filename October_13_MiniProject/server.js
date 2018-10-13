const express = require('express');
const app = express();
const path = require('path');

const PERSONS = require('./src/routes/person/personRouter');
const personRouter = PERSONS.router;
const people = PERSONS.people;

const CARS = require('./src/routes/car/carRouter');
const carRouter = CARS.router;
const vehicles = CARS.cars;

const PORT = 3000;



app.set('views', './src/views');
app.set('view engine', 'pug');


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));

app.use('/cars', (req, res, next) => {
    if (req.body.hasOwnProperty("deleteKey")) {
        switch (req.body.deleteKey) {
            case "KEY_DELETE":
                req.method = "DELETE";
                break;
            case "KEY_PATCH":
                req.method = "PATCH";
                break;
        }
    }
    next();
})

app.use('/persons', personRouter);
app.use('/cars', carRouter);


app.get('/', (req, res) => {
    res.render('index', { title: "Welcome Page" });
});




app.listen(PORT, (req, res) => {
    console.log(`Server Started on - ${PORT}`);
});
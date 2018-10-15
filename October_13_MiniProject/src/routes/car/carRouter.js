const express = require('express');
const router = express.Router();
const Car = require('../../modules/car');

const CARS_DB = [];


router.use(express.urlencoded({ extended: true }));


router.get('/add', (req, res) => {
    res.render('car/add', { title: "Add New Car" });
});


router.get('/', (req, res) => {
    res.render('car/index', { title: "Available Cars", cars: CARS_DB });
});


/* router.get('/1', (req, res) => {
    // const VIN = req.body.VIN;
    // const car = CARS_DB.find(car => car.VIN == VIN);
    res.render('car/detail', { title: "Cars Page" });

}); */


/* router.delete('/cars/2', (req, res) => {
    res.send("Delete Method Working");

}); */

router.post('/add', (req, res) => {
    const car = new Car(
        req.body.manufacturer,
        req.body.model,
        req.body.year,
        req.body.VIN,
        req.body.licenseNumber,
        req.body.color
    );
    CARS_DB.push(car);
    res.render('car/add', { title: "Cars Page" });
});


/* router.delete('/:id(\\d)', (req, res) => {
    res.send("DELETE METHOD WORKING")
}); */


module.exports.router = router;
module.exports.cars = CARS_DB;
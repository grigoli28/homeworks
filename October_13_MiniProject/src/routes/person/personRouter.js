const express = require('express');
const router = express.Router();
const Person = require('../../modules/person');

const PERSONS_DB = [];


router.use(express.urlencoded({ extended: true }));


/* Root */
router.get('/', (req, res) => {
    res.render('person/index', { title: "Available Persons", persons: PERSONS_DB });
});



/* Add */
router.get('/add', (req, res) => {
    res.render('person/add', { title: "Add New Person" });
});


router.post('/add', (req, res) => {
    const person = new Person(
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.id,
        req.body.birthDate
    );
    PERSONS_DB.push(person);
    res.render('person/add', { title: "Person Page" });
});




/* Detail */
router.get('/:ID', (req, res) => {
    const ID = req.params.ID;
    const person = PERSONS_DB.find(p => p.ID == ID);
    console.log(person);
    // res.end();
    res.render('person/detail', { title: "Person Details", person });
});



module.exports.router = router;
module.exports.people = PERSONS_DB;
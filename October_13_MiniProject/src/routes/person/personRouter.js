const express = require('express');
const router = express.Router();
const Person = require('../../modules/person');

const PERSONS_DB = [];


router.use(express.urlencoded({ extended: true }));


router.get('/', (req, res) => {
    res.render('person/index', { title: "Person Page" });
});


router.post('/', (req, res) => {
    const person = new Person(
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.id,
        req.body.birthDate
    );
    PERSONS_DB.push(person);
    res.render('person/index', { title: "Person Page" });
    // res.json(person);
});



module.exports.router = router;
module.exports.people = PERSONS_DB;
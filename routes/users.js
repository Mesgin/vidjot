const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

// User login route
router.get('/login', (req, res) => {
    res.render('users/login')
})

// User resigter route
router.get('/register', (req, res) => {
    res.render('users/register')
})

// Register form POST
router.post('/register', (req, res) => {
    let errors = []
    if (req.body.password != req.body.password2) {
        errors.push({text:'Passwords do not match'});
    }
    if (req.body.password.length < 8) {
        errors.push({text:'Password length should be atleast 8 charactors'});
    }
    if (errors.length > 0) {
        res.render('users/register', {
            errors: errors,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            password2: req.body.password2
        });
    } else {
        res.send('passed')
    }
})

module.exports = router
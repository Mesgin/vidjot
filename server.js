const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// Map global promise - get rid of warning
mongoose.Promise = global.Promise
// Connect to mongoose
mongoose.connect('mongodb+srv://user:vidjot@cluster0-oohzx.mongodb.net/ideas')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

// Load Idea Model
require('./models/Idea')
const Idea = mongoose.model('ideas')

// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Index Route
app.get('/', (req, res) => {
    const title = 'Welcome'
    res.render('index', {
        title: title
    })
})

// About Route
app.get('/about', (req, res) => {
    res.render('about')
})

// Idea Index Page
app.get('/ideas', (req, res) => {
    console.log(Idea)
    Idea.find({})
        .sort({ date: 'desc' })
        .then(ideas => {
            res.render('ideas/index', {
                ideas: ideas
            })
        })
})

// Add Idea Form
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add')
})

// Process Form
app.post('/ideas/add', (req, res) => {
    let errors = []
    if (!req.body.title) {
        errors.push({ text: 'Please add a title' })
    }
    if (!req.body.details) {
        errors.push({ text: 'Please add details' })
    }
    if (errors.length > 0) {
        res.render('ideas/add', {
            errors,
            title: req.body.title,
            details: req.body.details
        })
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        }
        new Idea(newUser)
            .save()
            .then(idea => {
                console.log(newUser)
                res.redirect('/ideas');
            })
    }
})

const port = 5000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
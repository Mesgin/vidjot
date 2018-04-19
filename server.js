const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise 
mongoose.connect('mongodb//localhost/vidjot-db',{
    useMongoClient:true
})
.then(()=> console.log('Mongodb is connected'))
.catch(err => console.log(err))


app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    const title = 'Welcome1'
    res.render('index',{
        title
    })
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.listen(8080,()=>{
    console.log(8080)
})
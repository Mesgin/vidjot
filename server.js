const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

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
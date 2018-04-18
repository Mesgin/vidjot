const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
  }))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.json()
})

app.listen(8080,()=>{
    console.log(8080)
})
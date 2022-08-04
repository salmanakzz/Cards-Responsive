const express = require('express')
const app = express()
const path =  require('path')

app.use(express.static('public'))
app.set('views',path.join(__dirname,'views'))
app.set('view engine','hbs')
app.get('/',(req,res) => {
    const products = require('./products')
    
    res.render('index',{products})
})

const port = 4000
app.listen(port,() => console.log('Server started at port '+port+'...'))
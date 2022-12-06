require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
)

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes)

const movieRoutes = require('./routes/movieRoutes')
app.use('/movie',movieRoutes)

app.get('/',(req,res) => {
    res.json({message: 'Oi Express'})
})

const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose.connect('mongodb+srv://'+DB_USER+':'+DB_PASS+'@apicluster0.00y7ie1.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectado')
    app.listen(3000)
})
.catch((err) => console.log(err))
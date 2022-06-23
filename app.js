const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')
const cors = require('cors')

const app = express()
const port = 3000

const db =  mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "contact_form"
})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/message', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
    console.log(`app is listening on post ${port}`)
})
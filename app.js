const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')

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
app.set('view engine', 'ejs')




app.get('/', (req, res) => {
    res.render('index')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port, () => {
    console.log(`app is listening on post ${port}`)
})
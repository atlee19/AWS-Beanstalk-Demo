const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello' })
})

app.get('/:name', (req, res) => {
    res.render('index', { 
        title : 'Hey', 
        message:  `Hello ${req.params.name}`
    })
})


app.listen(port)
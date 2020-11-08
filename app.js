const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))



app.get('/:name', (req, res) => {
    res.send(`<h1>Hello ${req.params.name}<h1>`)
})


app.listen(port)
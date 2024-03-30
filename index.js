const express = require('express');
const app = express();

app.use(express.urlencoded({ extended : true }))
app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send("get is worked")
})

app.post('/tacos', (req, res) => {
    const {meat, qlt} = (req.body)
    res.send(`OK, here are you ${qlt} ${meat}`)

})

app.listen('3000',() => {
    console.log("on the port 3000!")
})
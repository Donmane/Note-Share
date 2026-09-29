const express = require('express')
const app = express()
app.use(express.json())
app.get('/notes', (req, res) => {
    res.send("Here are your notes")
})
app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send("Notes posted")
    
})
app.listen(3000, () => {
    console.log("Running on port 3000")
})
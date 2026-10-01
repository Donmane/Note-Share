const express = require('express')
const app = express()
app.use(express.json())
app.get('/notes', (req, res) => {
    res.send("hERE")
})
app.post('/notes', (req, res) => {
    console.log(req.body);
    
    res.send("Sent Bro")
})
app.listen(3000, () => {
    console.log("Live Baby");
    
})
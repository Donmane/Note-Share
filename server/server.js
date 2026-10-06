const express = require('express')
const app = express()
app.use(express.json())
app.get('/notes', (req, res) => {
    res.send("Here is your data")
})
app.post('/notes', (req, res) => {
    console.log(req.body);
    res.send("sent")

    
})

app.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    res.send('note deleted!')
    
})

app.listen(3000, () => {
    console.log("Running");
    
})
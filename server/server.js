const express = require('express')
const app = express()
app.use(express.json())
const notes = []
app.get('/notes', (req, res) => {
    res.json(notes)
    console.log(notes);
})

app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    res.send("Notes Posted")
})
app.delete('/notes/:id', (req,res) => {
    notes.splice(req.params.id, 1)
    console.log(req.params.id);
    console.log(notes);
    res.send("Deleted")
})

app.listen(3000, () => {
    console.log("Live");
    
})
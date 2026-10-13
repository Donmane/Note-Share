const express = require('express')
const app = express()
app.use(express.json())
app.get('/notes', (req, res) => {
    res.send("Here are your notes")
})
const notes =[]
app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body)
    console.log(notes);
    res.send("Notes Sent")
    
})



app.delete('/notes/:id', (req, res) => {
    console.log(req.params.id);
    res.send("Deleted")
})
app.listen(3000, ()=> {
    console.log("Listening");
    
})
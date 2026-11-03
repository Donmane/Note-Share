const express = require('express')
const app = express()
app.use(express.json())
const notes = []
app.get("/notes", (req, res) => {
    res.json(notes)
    console.log(notes);
})
let count = 0
app.post("/notes", (req, res) => {
    console.log(req.body);
    count = count + 1
    const note = {id:count,...req.body}
    notes.push(note)
    console.log(notes);
    res.send("Notes Posted")    
})

app.delete("/notes/:id", (req, res) => {
    const position = notes.findIndex(note=>note.id === Number(req.params.id))
    if (position === -1) {
        return res.status(404).send("Not Found")
    }
    notes.splice(position, 1)
    console.log(position);
    console.log(notes);
    res.send("Deleted")
})
app.listen(3000, () => {
    console.log("Live");
    
})
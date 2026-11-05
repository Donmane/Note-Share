const dns = require("dns")
dns.setServers(["8.8.8.8", "1.1.1.1"])
require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch((err) => {
        console.log("Connection Failed:",err);
    })

app.use(express.json())
let notes = []
app.get('/notes', (req, res) => {
    res.json(notes) 
    console.log(notes);
})
let count = 0
app.post('/notes', (req, res) => {
    console.log(req.body);
    count = count + 1
    const note = { id: count, ...req.body }
    notes.push(note)
    console.log(notes);
    res.send("Notes Posted")
})
app.delete('/notes/:id', (req, res) => {
    const position = notes.findIndex(note => note.id === Number(req.params.id))
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

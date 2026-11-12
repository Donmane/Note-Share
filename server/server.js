const dns = require('dns')
dns.setServers(["8.8.8.8", "1.1.1.1"])
require('dotenv').config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to Mongo");
    })
    .catch((err) => {
        console.log("Connection Failure",err);
    }) 
const noteSchema = new mongoose.Schema({
    courseCode: String,
    courseTitle: String,
    lecturerName: String,
    noteTitle: String,
    fileLink: String
})
const Note = mongoose.model("Note", noteSchema)
let notes = []
app.get('/notes', (req, res) => {
    res.json(notes)
    console.log(notes);
})
app.post('/notes', async (req, res) => {
    const saved = await Note.create(req.body)
    res.json(saved)
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
    console.log("Listening");
})
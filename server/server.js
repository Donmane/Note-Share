const express = require('express')
const app = express()
app.get('/notes',(req, res)=> {
    res.send("Here are your notes")
})
app.listen(3000, () => {
    console.log("log 3000");
    
})

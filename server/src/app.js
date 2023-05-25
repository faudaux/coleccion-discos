const express = require('express')
const albumsdb = require('../config/db')
const app = express()
const PORT = 3000

// connect to database
albumsdb.connect()
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))



// set up port
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("Server listening")
})
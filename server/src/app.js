const express = require('express')
const app = express()
const PORT = 3000
const albums = require('./routes/albums')
const artists = require('./routes/artists')

// middlewares
app.use('/albums', albums)
app.use('/artists', artists)

// set up port
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server listening on port ${PORT}`)
})
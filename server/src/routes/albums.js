const express = require('express')
const albumsRouter = express.Router()
const db = require('../config/db')

albumsRouter.route('/')
.get((_req, res) => {
    db.any('SELECT album_title FROM albums')
    .then(data => {
        res.send(data)
    })
    .catch(err => console.log(err))
})

albumsRouter.route('/:id')
.post((req, _res) => {
    albumId = req.query.id
    albumTitle = req.query.title
    albumArtist = req.query.artist
})
.get((req, _res) => {
    albumId = req.params.id
})


module.exports = albumsRouter
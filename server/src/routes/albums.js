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
.post((req, res) => {
    let albumTitle = req.query.title,
    artistName = req.query.artist, 
    artistId

    db.oneOrNone('SELECT artist_id FROM artists WHERE artist_name = $1', [artistName])
    .then(data => artistId = data)
    .catch(err => console.log(err))

    db.none('INSERT INTO albums (album_title, artist_id) VALUES ($1, $2)', [albumTitle, artistId])
    .then(() => res.send("success"))
    .catch((err) => console.log(err))
})

albumsRouter.route('/:album_id')
.get((req, res) =>{
    let albumId = req.params.album_id
    db.one('SELECT (album_name, ')
})

.get((req, _res) => {
    albumId = req.params.id
})


module.exports = albumsRouter
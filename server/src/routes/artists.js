const express = require('express')
const albumsRoute = require('./albums')
const artistsRouter = express.Router()
const db = require('../config/db')

artistsRouter.use('/:id/albums', albumsRoute)

// get all artists or create a new one
artistsRouter.route('/')
.get((_req, res) => {
    db.any('SELECT artist_name FROM artists')
    .then(data => {
        res.send(data)
    })
    .catch(err => console.log(err))
})
.post((req, res) => {
    let artistName = req.query.name
    db.none('INSERT INTO artists (artist_name) VALUES ($1)', [artistName])
    .then(() => res.send("Success"))
    .catch(err => console.log(err))
})

// get, modify or delete a specific artist
artistsRouter.route('/:artist_id')
.get((req, res) => {
    let artistId = req.params.artist_id
    db.oneOrNone('SELECT artist_name FROM artists WHERE artist_id = $1', [artistId])
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
.put((req, res) => {
    let artistId = req.params.artist_id
    let artistName = req.query.name
    db.none('UPDATE artists SET artist_name = $1 WHERE artist_id = $2', [artistName, artistId])
    .then(() => res.send("Success"))
    .catch((err) => console.log(err))
})
.delete((req, res) => {
    let artistId = req.params.artist_id
    db.none('DELETE FROM artists WHERE artist_id = $1', [artistId])
    .then(() => res.send("Success"))
    .catch((err) => console.log(err))
})

module.exports = artistsRouter
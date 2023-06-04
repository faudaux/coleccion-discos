const express = require('express')
const albumsRoute = require('./albums')
const artistsRouter = express.Router()
const db = require('../config/db')

artistsRouter.use('/:artist_id/albums', albumsRoute)

artistsRouter.route('/')
// get all artists 
.get((_req, res) => {
    db.any('SELECT artist_name FROM artists')
    .then(data => {
        res.send(data)
    })
    .catch(err => console.log(err))
})
// create new artist
.post((req, res) => {
    let artistName = req.query.name
    db.none('INSERT INTO artists (artist_name) VALUES ($1)', [artistName])
    .then(() => res.send("Success"))
    .catch(err => console.log(err))
})

artistsRouter.route('/:artist_id')
// get specific artist
.get((req, res) => {
    let artistId = req.params.artist_id
    db.oneOrNone('SELECT artist_name FROM artists WHERE artist_id = $1', [artistId])
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
// modify artist
.put((req, res) => {
    let artistId = req.params.artist_id
    let artistName = req.query.name
    db.none('UPDATE artists SET artist_name = $1 WHERE artist_id = $2', [artistName, artistId])
    .then(() => res.send("Success"))
    .catch((err) => console.log(err))
})
// delete artist
.delete((req, res) => {
    let artistId = req.params.artist_id
    db.none('DELETE FROM artists WHERE artist_id = $1', [artistId])
    .then(() => res.send("Success"))
    .catch((err) => console.log(err))
})

module.exports = artistsRouter
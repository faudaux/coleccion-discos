const express = require('express')
const artistsRouter = express.Router()
const db = require('../config/db')

artistsRouter.route('/')
.get((_req, res) => {
    db.any('SELECT * FROM "user"."Artists"')
    .then(data => {
        res.send(data)
    })
})

artistsRouter.route('/:id')
.post((req, _res) => {
    artistId = req.query.id
    artistName = req.query.name
})

module.exports = artistsRouter
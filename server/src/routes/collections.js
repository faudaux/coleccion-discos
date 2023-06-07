const express = require('express')
const collectionsRouter = express.Router()
const db = require('../config/db')

collectionsRouter.route('/')
.get((req, res) => {
    let userId = req.params.user_id
    db.each('SELECT album_id FROM collections WHERE userId = user_id', userId, (row) => {
        db.one('SELECT album_title FROM albums WHERE $1', row)
        .then(data => data)
    })
    .then(data = res.send(data))
    .catch(err => res.send(err))
})

module.exports = collectionsRouter
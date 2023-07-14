const express = require('express')
const app = express()
const usersRouter = express.Router()
const db = require('../config/db')


usersRouter.route('/')
// get all users
.get((_req, res) => {
    db.any('SELECT * FROM users')
    .then(data => res.send(data))
    .catch(err => res.send(err))
})
// create a single user
.post((req, res) => {
    let userName = req.query.user_name
    db.none('INSERT INTO users (user_name) VALUES ($1)', userName)
    .then(() => res.redirect('/users'))
    .catch(err => res.send(err))
})

usersRouter.route('/:user_id')
// get a single user
.get((req, res) => {
    let userId = req.params.user_id
    db.oneOrNone('SELECT user_name FROM users WHERE user_id = $1', userId)
    .then(user => res.send(user))
    .catch(err => res.send(err))
})
// update user
.put((req, res) => {
    let userId = req.params.user_id
    , userName = req.query.user_name
    db.none('UPDATE users SET user_name = $1 WHERE user_id = $2', [userName, userId])
    .then(() => res.redirect('/users/' + userId))
    .catch(err => res.send(err))
})
// delete user
.delete((req, res) => {
    userId = req.params.user_id
    db.none('DELETE FROM users WHERE user_id = $1', userId)
    .then(() => res.redirect('/users'))
    .catch(err => res.send(err))
})


// every user is connected to a single collection and viceversa
usersRouter.route('/:user_id/collection')
.get((req, res) => {
    let userId = req.params.user_id
    db.any(
        'SELECT collections.album_id, album_title FROM collections, albums WHERE user_id = $1 AND collections.album_id = albums.album_id'
        , [userId])
    .then(data => res.send(data))
})
.post((req, res) => {
    let userId = req.params.user_id
    let albumId = req.query.album_id
    db.none('INSERT INTO collections (user_id, album_id) VALUES ($1,$2)', [userId, albumId])
    .then(() => res.redirect('/'))
    .catch(err => res.send(err))
})

module.exports = usersRouter
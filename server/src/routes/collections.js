const express = require('express')
const collectionsRouter = express.Router()
const db = require('../config/db')

collectionsRouter.route('/')
.get((req, res) => {
    db.any('SELECT * FROM collections')
    .then(data => res.send(data))
    .catch(err => console.log(err))
})
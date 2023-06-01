const pgp = require('pg-promise')()

// database connection options
const cn = {
    connectionString: 'postgres://federico:Hamurabi_12@localhost:5432/albumsdb',
    max: 30
}
const db = pgp(cn)

module.exports = db
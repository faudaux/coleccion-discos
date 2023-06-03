const initOptions = {
    schema: 'user'
}
const pgp = require('pg-promise')(initOptions)

// database connection options
const cn = {
    connectionString: 'postgres://federico:Hamurabi_12@localhost:5432/albumsdb',
    max: 30
}
const db = pgp(cn)

module.exports = db
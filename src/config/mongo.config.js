const mongoose = require('mongoose')
require('dotenv').config()

module.exports = {
  connectMongo () {
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
    const db = mongoose.connection
    return db
  }
}

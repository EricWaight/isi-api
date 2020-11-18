const mongoose = require('mongoose')
require('dotenv').config()

module.exports = {
  connectMongo () {
    console.log('The database URI is', process.env.DATABASE_URI)
    mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })
    const db = mongoose.connection
    return db
  }
}

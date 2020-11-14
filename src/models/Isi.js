const mongoose = require('mongoose')
const Schema = mongoose.Schema
const isiSchema = new Schema({
  q1: {
    type: Number,
    required: true
  },
  q2: {
    type: Number,
    required: true
  },
  q3: {
    type: Number,
    required: true
  },
  q4: {
    type: Number,
    required: true
  },
  q5: {
    type: Number,
    required: true
  },
  q6: {
    type: Number,
    required: true
  },
  q7: {
    type: Number,
    required: true
  }
})
const Isi = mongoose.model('Isi', isiSchema)
module.exports = Isi

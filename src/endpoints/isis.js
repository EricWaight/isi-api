const express = require('express')
const router = express.Router()
const Isi = require('../models/Isi')
const findIsi = require('../services/findIsi')

// Get All Route
router.get('/', async (req, res) => {
  try {
    const isi = await Isi.find()
    res.json(isi)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get One Route
router.get('/:id', findIsi, async (req, res) => {
  res.json(res.isi)
})

// Create One Route
router.post('/', async (req, res) => {
  const isi = new Isi({
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7,
    total: req.body.total
  })
  try {
    const newIsi = await isi.save()
    res.status(201).json({ newIsi })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Edit One Route PUT
router.put('/:id', async (req, res) => {

})

// Delete One Route
router.delete('/:id', async (req, res) => {

})

module.exports = router

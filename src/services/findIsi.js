const Isi = require('../models/Isi')

async function findIsi (req, res, next) {
  let isi
  try {
    isi = await Isi.findById(req.params.id)
    if (isi == null) {
      return res.status(404).json({ message: 'Cannot find Index' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.isi = isi
  next()
}

module.exports = findIsi

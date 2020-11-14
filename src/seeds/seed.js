var seeder = require('mongoose-seed')
require('dotenv').config()

// Connect to MongoDB via Mongoose
seeder.connect(process.env.DATABASE_URI, function () {
  // Load Mongoose models
  seeder.loadModels([
    'src/models/Isi.js'
  ])

  // Clear specified collections
  seeder.clearModels(['Isi'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect()
    })
  })
})

// Data array containing seed data - documents organized by Model
var data = [
  {
    model: 'Isi',
    documents: [
      {
        _id: '5faff6cbdc45c6991524201b',
        q1: 1,
        q2: 1,
        q3: 1,
        q4: 3,
        q5: 1,
        q6: 1,
        q7: 1,
        total: 9
      },
      {
        _id: '5fb00942255b289ea9b5a338',
        q1: 4,
        q2: 4,
        q3: 4,
        q4: 2,
        q5: 4,
        q6: 4,
        q7: 4,
        total: 26
      }
    ]
  }
]

const mongoose = require('mongoose')

const { Schema } = mongoose

const plantsModel = new Schema(
  {
    name: { type: String, required: true },
    scientName: { type: String, required: true },
    soilType: { type: String, required: true },
    species: { type: String, required: true },
    habitat: { type: String, required: true },
    edible: { type: String }
  }
)

module.exports = mongoose.model('Plants', plantsModel)

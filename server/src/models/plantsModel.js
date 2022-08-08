const mongoose = require('mongoose')

const { Schema } = mongoose

const plantsModel = new Schema(
  {
    name: { type: String, required: true },
    species: { type: String, required: true },
    owner: { type: String, required: true },
    age: { type: Number, required: true }
  }
)

module.exports = mongoose.model('Plants', plantsModel)

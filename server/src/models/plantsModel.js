const mongoose = require('mongoose')

const { Schema } = mongoose

const plantsModel = new Schema(
  {
    namePlant: { type: String, required: true },
    description: { type: String, required: true },
    tips: { type: String, required: true },
    imgUrl: { type: String, required: true }
  }
)

module.exports = mongoose.model('Plants', plantsModel)

const mongoose = require('mongoose')

const { Schema } = mongoose

const usersModel = new Schema(
  {
    userName: { type: String, required: true, unique: true, minLength: 6, maxLength: 16 },
    name: { type: String, required: true },
    country: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    plants: { type: Number }
  }
)

module.exports = mongoose.model('Users', usersModel)

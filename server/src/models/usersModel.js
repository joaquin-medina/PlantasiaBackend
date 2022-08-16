const mongoose = require('mongoose')

const { Schema } = mongoose

const usersModel = new Schema(
  {
    username: { type: String, required: true, minLength: 3, maxLength: 16 },
    nameAndSurname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
  }
)

module.exports = mongoose.model('Users', usersModel)

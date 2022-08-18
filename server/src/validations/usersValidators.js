const joi = require('joi')

const bodySchema = joi.object({
  userName: joi.string().trim().min(3).max(16).required(),
  nameAndSurname: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().trim().required()
})

const querySchema = joi.object().keys({
  email: joi.string(),
  password: joi.string().alphanum().trim().required()
}
)

const paramsSchema = joi.object({
  id: joi.string().alphanum().min(24).max(24).required()
})

module.exports = { bodySchema, querySchema, paramsSchema }

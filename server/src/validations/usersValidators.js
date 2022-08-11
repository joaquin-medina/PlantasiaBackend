const joi = require('joi')

const bodySchema = joi.object({
  name: joi.string().trim().min(3).max(16).required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().trim().required()
})

const querySchema = joi.object().keys({
  name: joi.string().min(3).max(16),
  email: joi.string().email()
}
)

const paramsSchema = joi.object({
  id: joi.string().alphanum().min(24).max(24).required()
})

module.exports = { bodySchema, querySchema, paramsSchema }

const joi = require('joi')

const bodySchema = joi.object({
  name: joi.string().required(),
  species: joi.string().alphanum().required(),
  owner: joi.string().alphanum().required(),
  age: joi.number().required()
})

const querySchema = joi.object().keys({
  name: joi.string(),
  owner: joi.string()
}
)

const paramsSchema = joi.object({
  id: joi.string().alphanum().min(24).max(24).required()
})

module.exports = { bodySchema, querySchema, paramsSchema }

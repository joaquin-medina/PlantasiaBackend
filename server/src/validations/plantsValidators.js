const joi = require('joi')

const bodySchema = joi.object({
  name: joi.string().required(),
  scientName: joi.string().alphanum().required(),
  soilType: joi.string().alphanum().required(),
  species: joi.string().alphanum().required(),
  habitat: joi.string().alphanum().required(),
  edible: joi.boolean().required()
})

const querySchema = joi.object().keys({
  name: joi.string(),
  scientName: joi.string()
}
)

const paramsSchema = joi.object({
  id: joi.string().alphanum().min(24).max(24).required()
})

module.exports = { bodySchema, querySchema, paramsSchema }

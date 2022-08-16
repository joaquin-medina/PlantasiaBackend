const joi = require('joi')

const bodySchema = joi.object({
  userName: joi.string().alphanum().required(),
  namePlant: joi.string().required(),
  description: joi.string().alphanum().required(),
  tips: joi.string().alphanum().required(),
  imgUrl: joi.string().alphanum().required()
})

const querySchema = joi.object().keys({
  userName: joi.string(),
  namePlant: joi.string()
}
)

const paramsSchema = joi.object({
  id: joi.string().alphanum().min(24).max(24).required()
})

module.exports = { bodySchema, querySchema, paramsSchema }

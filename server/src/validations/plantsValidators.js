const joi = require('joi')

const bodySchema = joi.object({
  namePlant: joi.string().required(),
  description: joi.string().required(),
  tips: joi.string().required(),
  imgUrl: joi.string().required()
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

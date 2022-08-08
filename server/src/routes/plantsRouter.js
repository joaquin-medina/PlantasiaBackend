const express = require('express')
const plantsControllers = require('../controllers/plantsControllers')
const validator = require('express-joi-validation').createValidator({})

const { bodySchema, querySchema, paramsSchema } = require('../validations/plantsValidators.js')

const router = (Plants) => {
  const plantsRouter = express.Router()

  const { getAllPlants, getPlantsById, postPlants, putPlantsById, deleteById } = plantsControllers(Plants)

  plantsRouter
    .route('/plants')
    .get(validator.query(querySchema), getAllPlants)
    .post(validator.body(bodySchema), postPlants)

  plantsRouter
    .route('/plants/:id')
    .get(validator.params(paramsSchema), getPlantsById)
    .put(validator.body(bodySchema), validator.params(paramsSchema), putPlantsById)
    .delete(deleteById)

  return plantsRouter
}

module.exports = router

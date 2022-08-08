const httpStatus = require('../helpers/httpStatus')
const customError = require('../helpers/customError')

const plantsControllers = (Plants) => {
  const getAllPlants = async (req, res, next) => {
    try {
      const { query } = req

      const response = await Plants.find(query)
      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postPlants = async (req, res, next) => {
    try {
      const { body } = req

      const plants = await new Plants(body)
      await plants.save()

      return res.status(httpStatus.CREATED).json(plants)
    } catch (err) {
      console.log(err)
      next(err)
    }
  }

  const putPlantsById = async (req, res, next) => {
    try {
      const { params, body } = req

      const checkData = await Plants.findOne({
        _id: params.id
      })

      if (checkData === null) {
        const error = customError()
        throw error
      }

      await Plants.updateOne(
        {
          _id: params.id
        }, {
          $set: {
            name: body.name,
            species: body.species,
            owner: body.owner,
            age: body.age
          }
        })
      return res.status(httpStatus.CREATED).send('data successfully updated')
    } catch (err) {
      next(err)
    }
  }

  const getPlantsById = async (req, res, next) => {
    try {
      const { params } = req

      const checkData = await Plants.findOne({
        _id: params.id
      })

      if (checkData === null) {
        const error = customError()
        throw error
      }

      const response = await Plants.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteById = async (req, res, next) => {
    try {
      const { params } = req

      const checkData = await Plants.findOne({
        _id: params.id
      })

      if (checkData === null) {
        const error = customError()
        throw error
      }

      await Plants.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('data deleted successfully')
    } catch (err) {
      next(err)
    }
  }

  return { getAllPlants, getPlantsById, postPlants, putPlantsById, deleteById }
}

module.exports = plantsControllers

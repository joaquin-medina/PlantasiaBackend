const express = require('express')
const Plants = require('./models/plantsModel')
const Users = require('./models/usersModel')
const plantsRouter = require('./routes/plantsRouter')(Plants)
const authRouter = require('./routes/authRouter')(Users)
const errorHandler = require('./middleware/errorHandler')
const httpStatus = require('./helpers/httpStatus')
require('dotEnv').config()
const { expressjwt } = require('express-jwt')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

require('./database/db.js')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.all('/*', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
  .unless({ path: ['/auth/login', '/auth/register'] })
)

app.use((err, _, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: err.name,
      cause: 'Tenes que identificarte primero'
    })
  } else {
    next(err)
  }
})

app.use('/api', plantsRouter)
app.use('/', authRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server is running')
})

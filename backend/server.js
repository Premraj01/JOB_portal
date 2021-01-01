/** @format */

import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import candidateRoutes from './routers/candidateRoutes.js'

dotenv.config()
connectDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/candidates', candidateRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is Running...')
  })
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)

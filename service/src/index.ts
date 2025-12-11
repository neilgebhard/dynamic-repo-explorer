import dotenv from 'dotenv'
dotenv.config()

import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './routes'

const app: Application = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`)
  next()
})

app.use('/api/repos', routes)

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Endpoint not found',
  })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err)
  res.status(500).json({
    error: 'Internal server error',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3001`)
})

import express from 'express'
import './db/mongoose.js'
import { router as taskRouter } from './routers/task.js'
import { router as userRouter } from './routers/user.js'

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use(userRouter, taskRouter)

app.listen(port, () => {
  console.log('server is up on port ' + port)
})

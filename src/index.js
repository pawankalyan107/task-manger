import express from 'express'
import './db/mongoose.js'
import { router as taskRouter } from './routers/task.js'
import { router as userRouter } from './routers/user.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter, taskRouter)

app.listen(port, () => {
  console.log('server is up on port ' + port)
})

import { Task } from './models/task.js'
import { User } from './models/user.js'

const main = async () => {
  // const task = await Task.findById('64319b29c63314914e4fc9bb')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)

  const user = await User.findById('64315ed41e9e708da6a4c747')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}
// main()
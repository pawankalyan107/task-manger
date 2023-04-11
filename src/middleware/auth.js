import { default as jwt } from 'jsonwebtoken'
import { User } from '../models/user.js'

export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decode = jwt.verify(token, 'thisisasecretkey')
    const user = await User.findOne({ '_id': decode._id, 'tokens.token': token })

    if (!user) {
      throw new Error('user not found')
    }

    req.token = token
    req.user = user
    next()
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' })
  }
}
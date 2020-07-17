const express = require('express')
const userRouter = express.Router()
const {
  root,
  postUser, // CREATE
  getUser, // READ
  putUser, // UPDATE
  deleteUser // DELETE
} = require('./action')

userRouter.get('/', root)
userRouter.post('/', postUser)
userRouter.get('/:idUser', getUser)
userRouter.put('/:idUser', putUser)
userRouter.delete('/:idUser', deleteUser)

module.exports = userRouter

const express = require('express')
const userController = require('./user')

const v1router = express.Router()

v1router.use('/user', userController)

module.exports = v1router

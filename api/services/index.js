const CRUD = require('../../service/CRUD')
const secret = require('../../service/config')
const logger = require('../../util/logger')

module.exports = {
  logger,
  secret,
  createUser: CRUD.DB.users.createUser,
  deleteUser: CRUD.DB.users.deleteUser,
  findUser: CRUD.DB.users.findUser,
  isUser: CRUD.DB.users.isUser,
  updateUser: CRUD.DB.users.updateUser
}

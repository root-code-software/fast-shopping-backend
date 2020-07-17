const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (idUser = '') => {
  try {
    await query(queries.deleteUser, { idUser }, (err, user) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      logger.info(`User ${user} erased!`)
      return {
        ok: true,
        data: user
      }
    })
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}

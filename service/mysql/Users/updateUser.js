const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async ({ idUser, address, name, email, phone }) => {
  try {
    await query(
      queries.updateUser,
      { idUser, address, name, email, phone },
      (err, user) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        logger.info(`User ${idUser} updated!`)
        return {
          ok: true,
          data: user
        }
      }
    )
  } catch (error) {
    logger.error(error)
    return {
      ok: false,
      data: error.message
    }
  }
}

const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (key = '', value = '') => {
  try {
    if (!key || !value) throw Error('You must provide key and value!')

    await query(queries.isUser, { key, value }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      logger.info(`User with ${key} ${value} searched! ...and found? ${res}`)
      return {
        ok: true,
        data: res.data[0].exists // TODO: check for existance in MySQL
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

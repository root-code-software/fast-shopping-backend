const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async (key = '', value = '') => {
  try {
    if (!key || !value) throw Error('You must provide key and value!')

    await query(queries.getUser, { key, value }, (err, res) => {
      if (err) {
        logger.warn(err)
        throw Error(err)
      }
      logger.info(`User ${JSON.stringify(res.data[0])} found!`)
      return {
        ok: true,
        data: res.data[0]
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

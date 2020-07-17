const query = require('../connection')
const queries = require('./queries')
const logger = require('../../../util/logger')

module.exports = async ({
  email = '',
  name = '',
  address = '',
  phone = ''
}) => {
  try {
    if (!email || !name) throw Error('You must provide email and name!')

    await query(
      queries.createUser,
      {
        email,
        name,
        address,
        phone
      },
      (err, res) => {
        if (err) {
          logger.warn(err)
          throw Error(err)
        }
        logger.info(`User ${JSON.stringify(res)} created!`)
        return {
          ok: true,
          data: res
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

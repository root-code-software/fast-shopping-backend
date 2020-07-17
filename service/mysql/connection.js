const mysql = require('mysql2')
const logger = require('../../util/logger')
const credentials = require('./credentials')

const pool = mysql.createPool(credentials())

pool.on('acquire', function (connection) {
  logger.info('Connection %d acquired', connection.threadId)
})

pool.on('connection', function (connection) {
  connection.query('SET SESSION auto_increment_increment=1')
  logger.info('Connection done with DB')
})

const query = async (query, variables, callback) => {
  try {
    const start = Date.now()
    pool.query(query(variables, pool.escape), function (error, rows) {
      if (error) {
        logger.error(
          `DB query Error:\n${JSON.stringify(variables)} => ${query(
            variables
          )} =>\n${error.message}:\n${error.stack}`
        )
        callback(error, {
          ok: false,
          data: error.message
        })
      }
      const duration = Date.now() - start
      logger.info(
        `DB query:\n${JSON.stringify(variables)} => ${query(
          variables
        )}=> ${rows} rows, in ${duration} ms`
      )
      callback(null, {
        ok: true,
        data: rows
      })
    })
  } catch (error) {
    logger.error(`DB Query Internal Error:\n${error.message}\n${error.stack}`)
    callback(error, {
      ok: false,
      data: error.message
    })
  }
}

module.exports = query

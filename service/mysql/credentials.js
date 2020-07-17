module.exports = () => {
  const env = process.env.NODE_ENV || 'development'
  if (env === 'development') {
    return {
      host: process.env.DEV_DB_HOST,
      database: process.env.DEV_DB_DATABASE,
      user: process.env.DEV_DB_USER,
      port: process.env.DEV_DB_PORT,
      password: process.env.DEV_DB_PASSWORD,
      waitForConnections: true,
      connectionLimit: 100,
      queueLimit: 10
    }
  } else {
    if (env === 'production') {
      return {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        waitForConnections: true
      }
    } else {
      return {
        host: process.env.TEST_DB_HOST,
        database: process.env.TEST_DB_DATABASE,
        user: process.env.TEST_DB_USER,
        port: process.env.TEST_DB_PORT,
        password: process.env.TEST_DB_PASSWORD,
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 50
      }
    }
  }
}

module.exports = class AppError extends Error {
  constructor (message, status) {
    super(message)

    this.name = 'DiariobotApiError'
    Error.captureStackTrace(this, this.constructor)
    this.status = status || 500
  }
}

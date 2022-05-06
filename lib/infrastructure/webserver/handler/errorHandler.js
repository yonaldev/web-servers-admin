class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleError = (err, res) => {
  const { statusCode = 500 } = err;
  let { message = "Error interno del servidor" } = err;

  res.status(statusCode).json({
    status: "ERROR",
    statusCode,
    message,
  });
};

module.exports = { ErrorHandler, handleError };

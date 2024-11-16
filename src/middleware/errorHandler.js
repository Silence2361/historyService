const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR]: ${err.message}`);

  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
};

export default errorHandler;

const errorMiddleware = () => (err, req, res, next) => {
  let error;
  let responseCode = 500;

  if (Array.isArray(err) && err.length > 0) {
    error = err;
    responseCode = 400;
  } else {
    error = 'An error has occured';
  }

  res.status(responseCode).json({
    error,
  });
};

export default errorMiddleware;

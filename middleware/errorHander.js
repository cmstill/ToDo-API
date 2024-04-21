const errorMiddleware = () => (err, req, res, next) => { // remember error handler middleware takes 4 params with err being the first one.  err is whatever error occured
  console.error(`ERROR : The following error occured : ${err}`);

  let error;
  let responseCode = 500;

  if (Array.isArray(err) && err.length > 0) {
    error = err;
    responseCode = 400;
  } else {
    error = 'This is bad';
  }

  // TODO: Send response to client.
  res.status(responseCode).json({
    error,// something here is making us log object object
  });
};

export default errorMiddleware;

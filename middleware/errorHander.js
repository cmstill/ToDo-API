const errorMiddleware = () => (err, req, res, next) => { // remember error handler middleware takes 4 params with err being the first one.  err is whatever error occured
	console.error(`ERROR : The following error occured : ${err}`);

	// TODO: Send response to client.
	res.status(500).json({
		error: true,
		errorMessage: 'Something went horribly wrong',
	});
};

export default errorMiddleware;
function handleErrors(err, req, res, next) {
    console.error(err.stack);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({ error: message });
}

module.exports = handleErrors;

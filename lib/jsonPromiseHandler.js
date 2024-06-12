module.exports = function (asyncHandler, app) {
    return (req, res, next) => {
        asyncHandler(app, req)
            .then((result) => {
                if (typeof result === 'string') {
                    res.status(200).send(result);
                    return;
                }
                res.status(200).json(result);
            })
            .catch((err) => {
                console.error(err);
                res.status(err.statusCode || 500).send(err.message);
                next();
            });
    };
};

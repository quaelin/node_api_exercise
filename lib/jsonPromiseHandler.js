module.exports = function (asyncHandler) {
    return (req, res, next) => {
        asyncHandler(req)
            .then((result) => {
                if (typeof result === 'string') {
                    res.status(200).send(result);
                    return;
                }
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(err.statusCode || 500).json(err);
                next();
            });
    };
};

const jsonPromiseHandler = require('../lib/jsonPromiseHandler');

async function getNetwork(req) {
    return [];
}

module.exports = (app) => {
    app.get('/network', jsonPromiseHandler(getNetwork));
};

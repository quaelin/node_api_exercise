const jsonPromiseHandler = require('../lib/jsonPromiseHandler');

async function getPetitions(req) {
    return [];
}

module.exports = (app) => {
    app.get('/petitions', jsonPromiseHandler(getPetitions));
};

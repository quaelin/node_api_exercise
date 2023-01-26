const jsonPromiseHandler = require('../lib/jsonPromiseHandler');
const { runQuery } = require('../lib/sql');

async function getPetitions(req) {
    return runQuery('SELECT * FROM petitions;');
}

module.exports = (app) => {
    app.get('/petitions', jsonPromiseHandler(getPetitions));
};

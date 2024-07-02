const jsonPromiseHandler = require('../lib/jsonPromiseHandler');
const { runQuery } = require('../lib/sql');

async function getPetitions(app) {
    return runQuery(app.db, 'SELECT * FROM petitions;');
}

module.exports = (app) => {
    app.get('/petitions', jsonPromiseHandler(getPetitions, app));
};

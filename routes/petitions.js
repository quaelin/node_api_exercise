const jsonPromiseHandler = require('../lib/jsonPromiseHandler');
const { runQuery, getConnection } = require('../lib/sql');

async function getPetitions(app) {
    return runQuery(
        await getConnection(app.dbfile),
        'SELECT * FROM petitions;'
    );
}

module.exports = (app) => {
    app.get('/petitions', jsonPromiseHandler(getPetitions, app));
};

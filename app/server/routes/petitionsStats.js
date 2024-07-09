const jsonPromiseHandler = require('../lib/jsonPromiseHandler');
const { runQuery } = require('../lib/sql');

async function getPetitionsStats(app) {
    const values = await runQuery(
        app.db,
        'SELECT count(*) count FROM petitions;'
    );
    return { count: values[0].count };
}

module.exports = (app) => {
    app.get('/petitions-stats', jsonPromiseHandler(getPetitionsStats, app));
};

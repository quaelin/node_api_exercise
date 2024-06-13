const app = require('./app');
const { getConnection } = require('./lib/sql');

module.exports = async function () {
    app.db = await getConnection(
        `${__dirname}/db/node_api_exercise_tests.sqlite`
    );
};

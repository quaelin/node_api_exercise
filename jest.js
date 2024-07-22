import { app } from './app/server/inbound/app';
import { getConnection } from './app/server/db/sql';

module.exports = async function () {
    app.db = await getConnection(
        `${__dirname}/app/server/db/node_api_exercise_tests.sqlite`
    );
};

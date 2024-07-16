import { app } from './app/server/app';
import { getConnection } from './app/server/lib/sql';

module.exports = async function () {
    app.db = await getConnection(
        `${__dirname}/app/server/db/node_api_exercise_tests.sqlite`
    );
};

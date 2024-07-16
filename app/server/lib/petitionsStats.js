import { runQuery } from './sql.js';

export async function getPetitionsStats(app) {
    const values = await runQuery(
        app.db,
        'SELECT count(*) count FROM petitions;'
    );
    return { count: values[0].count };
}

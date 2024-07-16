import { runQuery } from '../db/sql.js';

export async function getPetitions(app) {
    return runQuery(
        app.db,
        `
        SELECT * FROM petitions
        ;`
    );
}

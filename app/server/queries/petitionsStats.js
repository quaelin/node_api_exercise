import { getRows } from '../db/sql.js';

export async function getPetitionsStats(app) {
    const stmt = app.db.prepare('SELECT count(*) count FROM petitions;');
    const [row] = getRows(stmt);

    return { count: row.count };
}

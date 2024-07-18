import { getRows } from '../db/sql';

export async function getPetitionsStats(app) {
    const stmt = app.db.prepare('SELECT count(*) count FROM petitions;');
    const [row] = getRows(stmt);

    return { count: row.count };
}

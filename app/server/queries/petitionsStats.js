export async function getPetitionsStats(app) {
    const stmt = app.db.prepare('SELECT count(*) count FROM petitions;');
    stmt.step();
    const row = stmt.getAsObject();

    return { count: row.count };
}

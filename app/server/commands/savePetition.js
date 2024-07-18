export const savePetition = (petition, db) => {
    const sql = `
        insert into petitions (starter_name, title, body, created_at, updated_at)
        values (:starter_name, :title, :body, :created_at, :updated_at)
    `;
    const stmt = db.prepare(sql);
    stmt.run([
        petition.starter_name,
        petition.title,
        petition.body,
        petition.created_at,
        petition.updated_at
    ]);
    stmt.free();
};

import { app } from '../inbound/app';

export const savePetition = (petition) => {
    const sql = `
        insert into petitions (starter_urn, title, body, created_at, updated_at)
        values (:starter_urn, :title, :body, :created_at, :updated_at)
    `;
    const stmt = app.db.prepare(sql);
    stmt.run([
        petition.starter,
        petition.title,
        petition.body,
        petition.created_at,
        petition.updated_at
    ]);
    stmt.free();
};

import { runQuery } from '../db/sql';
import { app } from '../inbound/app';

export const savePetition = (petition) => {
    const sql = `
        insert into petitions (starter_urn, title, body, created_at, updated_at)
        values
        (
            '${petition.starter}',
            '${petition.title}',
            '${petition.body}',
            '${petition.created_at}',
            '${petition.created_at}'
        )
        `;
    runQuery(app.db, sql);
};
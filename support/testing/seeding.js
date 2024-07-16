import { app } from '../../app/server/inbound/app';
import { runQuery } from '../../app/server/db/sql';
require('./dates');

export const seedDbWithPetitionCount = (n) => {
    runQuery(app.db, 'delete from petitions');
    for (let i = 0; i < n; i++) {
        savePetition({
            title: `Petition ${i + 1}`,
            body: `We need this ${i + 1} times`,
            created_at: (i + 1).days().ago(),
            updated_at: (i + 1).days().ago()
        });
    }
};

export const savePetition = (petition) => {
    petition.starter = petition.starter || 'Bob';
    petition.created_at = petition.created_at || (1).days().ago();
    petition.updated_at = petition.updated_at || (1).days().ago();
    petition.body = petition.body || petition.title || 'We need this';
    const sql = `
        insert into petitions (starter_urn, title, body, created_at, updated_at)
        values
        (
            '${petition.starter}',
            '${petition.title}',
            '${petition.body}',
            '${petition.created_at.toISOString()}',
            '${petition.created_at.toISOString()}'
        )
        `;
    runQuery(app.db, sql);
};

const app = require('../../app/server/app');
const { runQuery } = require('../../app/server/lib/sql');

const seedDbWithPetitionCount = (n) => {
    runQuery(app.db, 'delete from petitions');
    for (let i = 0; i < n; i++) {
        savePetition({
            starter: `urn:changeorg:starter:${i}`,
            title: `Petition ${i + 1}`,
            body: `We need this ${i + 1} times`,
            created_at: (i + 1).days().ago(),
            updated_at: new Date()
        });
    }
};

const savePetition = (petition) => {
    petition.created_at = petition.created_at || new Date();
    petition.updated_at = petition.updated_at || new Date();
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

module.exports = { seedDbWithPetitionCount, savePetition };

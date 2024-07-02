const app = require('../../app/server/app');
const { runQuery } = require('../../app/server/lib/sql');

const seedDbWithPetitionCount = (n) => {
    runQuery(app.db, 'delete from petitions');
    for (let i = 0; i < n; i++) {
        runQuery(
            app.db,
            `
                insert into petitions (starter_urn, title, body, created_at, updated_at)
                values
                (
                    'urn:changeorg:starter:${i}',
                    'Petition ${i + 1}',
                    'We need this',
                    '2020-01-0${i} 00:00:00',
                    '2021-01-0${i} 00:00:00'
                )
            `
        );
    }
};

module.exports = seedDbWithPetitionCount;

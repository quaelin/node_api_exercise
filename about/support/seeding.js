const app = require('../../app');
const { runQuery } = require('../../lib/sql');

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
                    'save ${i}',
                    'Because we need ${i}',
                    '2020-01-0${i} 00:00:00',
                    '2021-01-0${i} 00:00:00'
                )
            `
        );
    }
};

module.exports = seedDbWithPetitionCount;

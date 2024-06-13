const app = require('../../app');
const request = require('supertest');
const { runQuery } = require('../../lib/sql');

describe('/petitions', () => {
    test('it is available', async () => {
        const response = await request(app).get('/petitions');
        expect(response.status).toBe(200);
    });

    test('it returns all the petitions', async () => {
        await runQuery(app.db, 'delete from petitions;');
        await runQuery(
            app.db,
            `
      insert into petitions (starter_urn, title, body, created_at, updated_at)
      values ('urn:changeorg:starter:1','Save our oceans','We need that','2020-01-01 00:00:00','2024-01-01 00:00:00')`
        );
        await runQuery(
            app.db,
            `
      insert into petitions (starter_urn, title, body, created_at, updated_at)
      values ('urn:changeorg:starter:2','Save our land','We need it','2020-01-01 00:00:00','2024-02-01 00:00:00')`
        );
        const response = await request(app).get('/petitions');

        expect(response.body).toEqual([
            {
                starter_urn: 'urn:changeorg:starter:1',
                title: 'Save our oceans',
                body: 'We need that',
                created_at: '2020-01-01 00:00:00',
                updated_at: '2024-01-01 00:00:00'
            },
            {
                starter_urn: 'urn:changeorg:starter:2',
                title: 'Save our land',
                body: 'We need it',
                created_at: '2020-01-01 00:00:00',
                updated_at: '2024-02-01 00:00:00'
            }
        ]);
    });
});

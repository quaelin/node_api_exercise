const { savePetition } = require('../../../../support/testing');
const app = require('../../app');
const request = require('supertest');
const { runQuery } = require('../../lib/sql');

describe('/petitions-stats', () => {
    beforeEach(() => {
        runQuery(app.db, 'delete from petitions');
    });

    test('it is available', async () => {
        const response = await request(app).get('/petitions-stats');
        expect(response.status).toBe(200);
    });

    test('it returns the petitions count', async () => {
        savePetition({ starter: 'Bob', title: 'any' });
        savePetition({ starter: 'Bob', title: 'other' });
        savePetition({ starter: 'Bob', title: 'something' });
        const response = await request(app).get('/petitions-stats');

        expect(response.body).toEqual({ count: 3 });
    });
});
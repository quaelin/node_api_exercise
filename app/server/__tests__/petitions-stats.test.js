import { app } from '../app';
import request from 'supertest';
import { runQuery } from '../lib/sql';
import { savePetition } from '../../../support/testing/seeding';

describe('/petitions-stats', () => {
    beforeEach(() => {
        runQuery(app.db, 'delete from petitions');
    });

    it('is available', async () => {
        const response = await request(app).get('/petitions-stats');
        expect(response.status).toBe(200);
    });

    it('returns the petitions count', async () => {
        savePetition({ starter: 'Bob', title: 'any' });
        savePetition({ starter: 'Bob', title: 'other' });
        savePetition({ starter: 'Bob', title: 'something' });
        const response = await request(app).get('/petitions-stats');

        expect(response.body).toEqual({ count: 3 });
    });
});

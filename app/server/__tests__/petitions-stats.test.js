import { app } from '../inbound/app';
import request from 'supertest';
import { runQuery } from '../db/sql';
import { petition } from '../../../support/testing/seeding';
import { savePetition } from '../commands/savePetition';

describe('/petitions-stats', () => {
    beforeEach(() => {
        runQuery(app.db, 'delete from petitions');
    });

    it('is available', async () => {
        const response = await request(app).get('/petitions-stats');
        expect(response.status).toBe(200);
    });

    it('returns the petitions count', async () => {
        savePetition(petition({ title: 'any' }), app.db);
        savePetition(petition({ title: 'other' }), app.db);
        savePetition(petition({ title: 'something' }), app.db);
        const response = await request(app).get('/petitions-stats');

        expect(response.body).toEqual({ count: 3 });
    });
});

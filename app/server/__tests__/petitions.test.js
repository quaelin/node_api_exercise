import { app } from '../inbound/app';
import request from 'supertest';
import '../../../support/testing/dates.js';

describe('/petitions', () => {
    it('is available', async () => {
        const response = await request(app).get('/petitions');
        expect(response.status).toBe(200);
    });
});

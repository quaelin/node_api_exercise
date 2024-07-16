import { app } from '../app';
import request from 'supertest';

describe('/health', () => {
    it('is available', async () => {
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);
    });

    it('returns expected body', async () => {
        const response = await request(app).get('/health');

        expect(response.body).toEqual({ status: 'ALIVE' });
    });
});

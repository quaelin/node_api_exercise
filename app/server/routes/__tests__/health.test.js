const app = require('../../app');
const request = require('supertest');

describe('/health', () => {
    it('is available', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
    });
});

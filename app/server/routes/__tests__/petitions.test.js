const app = require('../../app');
const request = require('supertest');

describe('/petitions', () => {
    it('is available', async () => {
        const response = await request(app).get('/petitions');
        expect(response.status).toBe(200);
    });
});

const app = require('../../app');
const request = require('supertest');

describe('/petitions', () => {
    test('it passes', async () => {
        const response = await request(app).get('/petitions');
        expect(!!response).toBe(true);
    });
});

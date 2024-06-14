const http = require('http');

const app = require('../app.js');
const eventually = require('./eventually.js');
const seedDbWithPetitionCount = require('./seeding.js');
const { openPage } = require('./page.js');

describe('home page', () => {
    let server;
    let page;

    beforeEach(async () => {
        seedDbWithPetitionCount(2);
        await new Promise((resolve) => {
            server = http.createServer(app).listen(5001, resolve);
        });
        page = await openPage('http://localhost:5001');
    });
    afterEach(() => {
        server.close();
    });

    test('has the expected title', async () => {
        expect(page.title).toBe('change.org nodejs coding exercise');
    });

    test('displays the number of petitions', async () => {
        await eventually(() => {
            expect(
                page.querySelector('#petitions-count').textContent
            ).toContain('2');
        });
    });
});

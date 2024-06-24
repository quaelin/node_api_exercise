const http = require('http');
const {
    openPage,
    eventually,
    seedDbWithPetitionCount
} = require('./support/index.js');

const app = require('../app.js');

describe('home page', () => {
    let port = 5001;
    let server;
    let page;

    beforeEach(async () => {
        seedDbWithPetitionCount(5);
        await new Promise((resolve) => {
            server = http.createServer(app).listen(port, resolve);
        });
        page = await openPage(`http://localhost:${port}`);
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
            ).toContain('Already 5 petitions');
        });
    });

    test('displays all the petitions', async () => {
        await eventually(() => {
            expect(page.body.textContent).toContain('Petition 5');
        });
    });
});

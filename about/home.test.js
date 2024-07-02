const http = require('http');
const {
    Page,
    eventually,
    seedDbWithPetitionCount
} = require('../support/testing/index.js');

const app = require('../app/server/app.js');

describe('home page', () => {
    let port = 5001;
    let server;
    let page;

    beforeEach(async () => {
        seedDbWithPetitionCount(5);
        await new Promise((resolve) => {
            server = http.createServer(app).listen(port, resolve);
        });
        page = new Page();
        await page.open(`http://localhost:${port}`);
    });
    afterEach(async () => {
        server.close();
        await page.close();
    });

    test('has the expected title', () => {
        expect(page.title()).toBe('change.org nodejs coding exercise');
    });

    test('displays the number of petitions', async () => {
        await eventually(() => {
            expect(page.section('Welcome')).toContain('Already 5 petitions');
        });
    });

    test('displays all the petitions', async () => {
        await eventually(() => {
            expect(page.section('What is happening')).toContain('Petition 5');
        });
        await eventually(() => {
            expect(page.section('Petition 5')).toContain('We need this');
        });
    });
});

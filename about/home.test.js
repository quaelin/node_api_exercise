const http = require('http');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const config = {
    beforeParse: (window) => {
        window.fetch = (url, options) => {
            return fetch(`http://localhost:5001${url}`, options);
        };
    },
    runScripts: 'dangerously',
    resources: 'usable'
};
const app = require('../app.js');
const eventually = require('./eventually.js');
const seedDbWithPetitionCount = require('./seeding.js');

describe('home page', () => {
    let server;
    let document;

    beforeEach(async () => {
        seedDbWithPetitionCount(2);
        await new Promise((resolve) => {
            server = http.createServer(app).listen(5001, resolve);
        });
        const dom = await JSDOM.fromURL('http://localhost:5001/', config);
        document = dom.window.document;
    });
    afterEach(() => {
        server.close();
    });

    test('has the expected title', async () => {
        expect(document.title).toBe('change.org nodejs coding exercise');
    });

    test('displays the number of petitions', async () => {
        await eventually(() => {
            expect(
                document.querySelector('#petitions-count').textContent
            ).toContain('2');
        });
    });
});

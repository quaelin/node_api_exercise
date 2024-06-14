const http = require('http');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const config = {
    runScripts: 'dangerously',
    resources: 'usable'
};
const app = require('../app.js');

describe('home page', () => {
    let server;
    let document;
    beforeEach(async () => {
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
        expect(
            document.querySelector('#petitions-count').textContent
        ).toContain('2');
    });
});

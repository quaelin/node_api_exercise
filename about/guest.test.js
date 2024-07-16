/**
 * @jest-environment node
 */

const http = require('http');
const {
    Page,
    eventually,
    seedDbWithPetitionCount
} = require('../support/testing');

const app = require('../app/server/app.js');

describe('home page', () => {
    let port = 5001;
    let server;
    let page;
    let petitionCount = 9;

    beforeEach(async () => {
        seedDbWithPetitionCount(petitionCount);
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

    it('has the expected title', () => {
        expect(page.title()).toBe('change.org nodejs coding exercise');
    });

    it('welcomes with the total number of petitions', async () => {
        await eventually(() => {
            expect(page.section('Welcome')).toContain('Already 9 petitions');
        });
    });

    it('displays petition info', async () => {
        await eventually(() => {
            expect(page.section('Petition 2')).toContain(
                'We need this 2 times'
            );
        });
    });

    it('displays all the petitions', async () => {
        await eventually(() => {
            const petitions = page
                .section('What is happening')
                .match(/Petition/g);

            expect(petitions.length).toEqual(petitionCount);
        });
    });
});

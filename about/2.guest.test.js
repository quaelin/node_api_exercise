import http from 'http';
import { Page, eventually } from '../support/testing/index.js';

import { app } from '../app/server/inbound/app.js';
import { seedDbWithPetitionCount } from '../support/testing/seeding.js';

describe('guest on home page', () => {
    let port = 5002;
    let server;
    let page;

    beforeEach(async () => {
        seedDbWithPetitionCount(9);
        await new Promise((resolve) => {
            server = http.createServer(app).listen(port, resolve);
        });
        page = new Page();
        await page.open(`http://localhost:${port}`);
    });
    afterEach(async () => {
        await server.close();
        await page.close();
    });

    it('sees all the petitions', async () => {
        await eventually(() => {
            const petitions = page
                .section('What is happening')
                .match(/Petition/g);

            expect(petitions.length).toEqual(9);
        });
    });
});

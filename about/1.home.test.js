import http from 'http';
import { Page, eventually } from '../support/testing/index.js';

import { app } from '../app/server/inbound/app.js';
import { seedDbWithPetitionCount } from '../support/testing/seeding.js';

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
        await server.close();
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
});

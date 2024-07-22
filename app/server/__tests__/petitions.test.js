import { app } from '../inbound/app';
import request from 'supertest';
import '../../../support/testing/dates.js';
import { savePetition } from '../commands/savePetition';
import { Petition } from '../../domain/Petition';
import { truncate } from '../../../support/testing/truncating';
import { saveUser } from '../commands/saveUser';
import { User } from '../../domain/User';

describe('/petitions', () => {
    beforeEach(() => {
        truncate(app.db);
        saveUser(new User('Bob'), app.db);
        saveUser(new User('Max'), app.db);
    });

    it('is available', async () => {
        const response = await request(app).get('/petitions');
        expect(response.status).toBe(200);
    });

    it('returns all petitions', async () => {
        savePetition(
            new Petition({
                title: 'save 1',
                created_at: (1).days().ago().toISOString()
            }).startedBy('Bob'),
            app.db
        );
        savePetition(
            new Petition({
                title: 'save 2',
                created_at: (45).days().ago().toISOString()
            }).startedBy('Max'),
            app.db
        );
        const response = await request(app).get('/petitions');

        expect(response.body.map((p) => p.title)).toEqual(['save 1', 'save 2']);
    });
});

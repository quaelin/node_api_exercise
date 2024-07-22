import { app } from '../inbound/app';
import request from 'supertest';
import { savePetition } from '../commands/savePetition';
import { Petition } from '../../domain/Petition';
import { truncate } from '../../../support/testing/truncating';
import { saveUser } from '../commands/saveUser';
import { User } from '../../domain/User';

describe('/petitions-stats', () => {
    beforeEach(() => {
        truncate(app.db);
        saveUser(new User('Bob'), app.db);
    });

    it('is available', async () => {
        const response = await request(app).get('/petitions-stats');
        expect(response.status).toBe(200);
    });

    it('returns the petitions count', async () => {
        savePetition(new Petition({ title: 'any' }).startedBy('Bob'), app.db);
        savePetition(new Petition({ title: 'other' }).startedBy('Bob'), app.db);
        const response = await request(app).get('/petitions-stats');

        expect(response.body).toEqual({ count: 2 });
    });
});

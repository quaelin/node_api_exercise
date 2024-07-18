import { app } from '../../app/server/inbound/app';
import { savePetition } from '../../app/server/commands/savePetition';
import { Petition } from '../../app/domain/Petition';
import './dates';
import { truncate } from './truncating';
import { saveUser } from '../../app/server/commands/saveUser';
import { User } from '../../app/domain/User';

export const seedDbWithPetitionCount = (n) => {
    truncate(app.db);
    saveUser(new User('Bob'), app.db);
    for (let i = 0; i < n; i++) {
        savePetition(
            petition({
                title: `Petition ${i + 1}`,
                body: `We need this ${i + 1} times`,
                created_at: (i + 1).days().ago().toISOString(),
                updated_at: (i + 1).days().ago().toISOString()
            }),
            app.db
        );
    }
};

export const petition = (fields) =>
    new Petition({
        ...fields,
        created_at: fields.created_at || (1).days().ago().toISOString(),
        updated_at: fields.updated_at || (1).days().ago().toISOString(),
        body: fields.body || fields.title || 'We need this'
    }).startedBy('Bob');

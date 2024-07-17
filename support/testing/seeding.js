import { app } from '../../app/server/inbound/app';
import { runQuery } from '../../app/server/db/sql';
import { savePetition } from '../../app/server/commands/savePetition';
import { Petition } from '../../app/domain/Petition';
require('./dates');

export const seedDbWithPetitionCount = (n) => {
    runQuery(app.db, 'delete from petitions');
    for (let i = 0; i < n; i++) {
        savePetition(
            petition({
                title: `Petition ${i + 1}`,
                body: `We need this ${i + 1} times`,
                created_at: (i + 1).days().ago().toISOString(),
                updated_at: (i + 1).days().ago().toISOString()
            })
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

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
            new Petition({
                title: `Petition ${i + 1}`,
                body: `We need this ${i + 1} times`,
                created_at: (i + 1).days().ago().toISOString(),
                updated_at: (i + 1).days().ago().toISOString()
            }).startedBy('Bob'),
            app.db
        );
    }
};

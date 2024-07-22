import fs from 'fs';
import { User } from '../../domain/User.js';
import { saveUser } from '../commands/saveUser.js';
import { getConnection } from './sql.js';
import '../../../support/testing/dates.js';
import { savePetition } from '../commands/savePetition.js';
import { Petition } from '../../domain/Petition.js';
import { truncate } from '../../../support/testing/truncating.js';

const populate = async (file) => {
    const db = await getConnection(file);

    truncate(db);

    saveUser(new User('Bob'), db);
    saveUser(new User('Max'), db);

    savePetition(
        new Petition({
            title: 'Save our oceans',
            body: 'Lorem ipsum',
            created_at: '2020-12-24 00:00:00',
            updated_at: (1).hours().ago().toISOString()
        }).startedBy('Bob'),
        db
    );
    savePetition(
        new Petition({
            title: 'Sign for climate change',
            body: 'Lorem ipsum',
            created_at: (2).days().ago().toISOString(),
            updated_at: (2).days().ago().toISOString()
        }).startedBy('Bob'),
        db
    );
    savePetition(
        new Petition({
            title: 'Ban the Cruel Sale & Trade of Shark Fins',
            body: 'Lorem ipsum',
            created_at: '2020-06-01 00:00:00',
            updated_at: '2021-01-01 12:00:00'
        }).startedBy('Bob'),
        db
    );
    savePetition(
        new Petition({
            title: 'Seatbelts for Canadian School Buses, Now!',
            body: 'Lorem ipsum',
            created_at: (3).days().ago().toISOString(),
            updated_at: (3).days().ago().toISOString()
        }).startedBy('Bob'),
        db
    );
    savePetition(
        new Petition({
            title: 'Safer Personal Protective Equipment (PPE) for NHS workers',
            body: 'Lorem ipsum',
            created_at: (5).days().ago().toISOString(),
            updated_at: (5).days().ago().toISOString()
        }).startedBy('Bob'),
        db
    );
    savePetition(
        new Petition({
            title: 'Cancer patients exempted from travel restrictions',
            body: 'Lorem ipsum',
            created_at: (6).days().ago().toISOString(),
            updated_at: (2).hours().ago().toISOString()
        }).startedBy('Bob'),
        db
    );

    savePetition(
        new Petition({
            title: 'Fight for justice',
            body: 'Lorem ipsum',
            created_at: (1).days().ago().toISOString(),
            updated_at: (1).hours().ago().toISOString()
        }).startedBy('Max'),
        db
    );
    savePetition(
        new Petition({
            title: 'COVID-19 funding for Indigenous communities',
            body: 'Lorem ipsum',
            created_at: (4).days().ago().toISOString(),
            updated_at: (4).hours().ago().toISOString()
        }).startedBy('Max'),
        db
    );

    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(file, buffer);
};

const [_, __, dbfilename] = process.argv;

if (!dbfilename.endsWith('.sqlite')) {
    const command = `Error:
    Expecting command: node db/seeds.js <dbfile.sqlite>
    `;
    console.log(command);
    process.exit(1);
}
populate(dbfilename).then(() => {
    console.log(`database ${dbfilename} populated`);
});

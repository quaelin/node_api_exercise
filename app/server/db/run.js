const [_, __, dbfilename, sqlfilename] = process.argv;

if (!dbfilename.endsWith('.sqlite') || !sqlfilename.endsWith('.sql')) {
    const command = `Error:
    Expecting command: node db/run.js <dbfile.sqlite> <seeds.sql>
    `;
    console.log(command);
    process.exit(1);
}

import fs from 'fs';
const schema = fs.readFileSync(sqlfilename).toString();

import { getConnection, runQuery } from '../lib/sql.js';
const runSqlFile = async (file, schema) => {
    const db = await getConnection(file);
    await runQuery(db, schema);

    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(file, buffer);
};

runSqlFile(dbfilename, schema).then(() => {
    console.log(`database ${dbfilename} ready`);
});

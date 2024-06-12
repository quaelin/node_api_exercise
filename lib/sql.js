const fs = require('fs');
const zipObject = require('lodash/zipObject');
const initSqlJs = require('sql.js');

async function getConnection(file) {
    const fileBuffer = fs.readFileSync(file);
    const SQL = await initSqlJs();
    const db = new SQL.Database(fileBuffer);
    db.file = file;
    return db;
}

async function runQuery(db, sqlStatement) {
    const response = db.exec(sqlStatement);

    if (response.length) {
        const [{ columns, values }] = response;
        return values.map((record) => zipObject(columns, record));
    } else {
        return [];
    }
}

async function commit(db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(db.file, buffer);
}

module.exports = {
    commit,
    getConnection,
    runQuery
};

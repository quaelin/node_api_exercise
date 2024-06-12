const fs = require('fs');
const zipObject = require('lodash/zipObject');
const initSqlJs = require('sql.js');

async function getConnection(file) {
    const fileBuffer = fs.readFileSync(file);
    const SQL = await initSqlJs();
    return new SQL.Database(fileBuffer);
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

module.exports = {
    getConnection,
    runQuery
};

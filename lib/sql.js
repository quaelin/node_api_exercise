const fs = require('fs');
const zipObject = require('lodash/zipObject');
const initSqlJs = require('sql.js');

async function getConnection() {
    const fileBuffer = fs.readFileSync(`${__dirname}/../db/node_api_exercise.sqlite`);
    const SQL = await initSqlJs();
    return new SQL.Database(fileBuffer);
}

async function runQuery(sqlStatement) {
    const db = await getConnection();
    const [{ columns, values }] = db.exec(sqlStatement);
    return values.map((record) => zipObject(columns, record));
}

module.exports = {
    getConnection,
    runQuery,
};

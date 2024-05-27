

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
    runQuery,
};


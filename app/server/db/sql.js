import fs from 'fs';
import initSqlJs from 'sql.js';

export async function getConnection(file) {
    const fileBuffer = fs.readFileSync(file);
    const SQL = await initSqlJs();
    return new SQL.Database(fileBuffer);
}

export async function runQuery(db, sqlStatement) {
    const response = db.exec(sqlStatement);

    if (response.length) {
        const [{ columns, values }] = response;

        return values.map((record) =>
            columns.reduce((o, f, index) => {
                o[columns[index]] = record[index];
                return o;
            }, {})
        );
    } else {
        return [];
    }
}

export function getRows(stmt) {
    const rows = [];
    while (stmt.step()) {
        const row = stmt.getAsObject();
        rows.push(row);
    }
    stmt.free();
    return rows;
}

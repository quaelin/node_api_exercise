import { runQuery } from '../../app/server/db/sql.js';

export const truncate = (db) => {
    runQuery(db, 'delete from petitions');
    runQuery(db, 'delete from users');
};

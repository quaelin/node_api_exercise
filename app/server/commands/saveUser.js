export const saveUser = (user, db) => {
    const sql = `
        insert into users (user_name)
        values (:user_name)
    `;
    const stmt = db.prepare(sql);
    stmt.run([user.user_name]);
    stmt.free();
};

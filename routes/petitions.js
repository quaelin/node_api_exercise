const jsonPromiseHandler = require("../lib/jsonPromiseHandler");
const { runQuery, getConnection } = require("../lib/sql");

async function getPetitions(app, req) {
  return runQuery(await getConnection(app.dbfile), "SELECT * FROM petitions;");
}

module.exports = (app) => {
  app.get("/petitions", jsonPromiseHandler(app, getPetitions));
};

const jsonPromiseHandler = require('../lib/jsonPromiseHandler');

async function healthcheck(req) {
    return 'ALIVE';
}

module.exports = (app) => {
    app.get('/', jsonPromiseHandler(app, healthcheck));
    app.get('/health', jsonPromiseHandler(app, healthcheck));
};

const fs = require('fs');

module.exports = (app) => {
    app.get('/webapp.js', function (_, response) {
        response.setHeader('Content-Type', 'application/javascript');
        const code = fs.readFileSync('web/app.js').toString();

        response.write(code);
        response.end();
    });
};

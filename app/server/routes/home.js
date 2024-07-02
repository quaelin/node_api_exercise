const fs = require('fs');

module.exports = (app) => {
    app.get('/', function (_, response) {
        response.setHeader('Content-Type', 'text/html');
        const html = fs.readFileSync('app/client/index.html').toString();

        response.write(html);
        response.end();
    });

    app.get('/main.css', function (_, response) {
        response.setHeader('Content-Type', 'text/css');
        const code = fs.readFileSync('app/client/main.css').toString();

        response.write(code);
        response.end();
    });
};

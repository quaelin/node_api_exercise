const fs = require('fs');

module.exports = (app) => {
    app.get('/', function (_, response) {
        response.setHeader('Content-Type', 'text/html');
        var html = fs.readFileSync('public/index.html').toString();

        response.write(html);
        response.end();
    });
};

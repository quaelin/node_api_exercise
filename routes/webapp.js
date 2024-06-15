const fs = require('fs');

module.exports = (app) => {
    app.get('/webapp.js', function (_, response) {
        response.setHeader('Content-Type', 'text/babel');
        const code = fs.readFileSync('build/bundle.js').toString();

        response.write(code);
        response.end();
    });
};

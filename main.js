const express = require('express');

const config = require('./config.json');

const app = express();

const routes = [
    'health',
    'network',
    'petitions',
];
routes.forEach((route) => {
    require(`./routes/${route}`)(app);
})

app.listen(config.port, () => {
    console.log(`node_api_exercise app listening on port ${config.port}`);
});

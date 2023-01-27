const express = require('express');
const morgan = require('morgan');

const config = require('./config.json');

const app = express();
app.set('json spaces', 4); // pretty-print JSON output from endpoints
app.use(morgan('dev')); // Request logger

[
    'health',
    'network',
    'petitions',
].forEach((route) => {
    require(`./routes/${route}`)(app);
})

app.listen(config.port, () => {
    console.log(`node_api_exercise app listening on port ${config.port}`);
});

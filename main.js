const express = require('express');

const config = require('./config.json');

const app = express();
app.set('json spaces', 4); // pretty-print JSON output from endpoints

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

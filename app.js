const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('json spaces', 4); // pretty-print JSON output from endpoints
app.use(morgan('dev')); // Request logger

['health', 'petitions'].forEach((route) => {
    require(`./routes/${route}`)(app);
});

module.exports = app;

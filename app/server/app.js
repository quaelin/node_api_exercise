const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('json spaces', 4);
app.use(morgan('dev'));

['home', 'health', 'petitions', 'webapp', 'petitionsStats'].forEach((route) => {
    require(`./routes/${route}`)(app);
});

module.exports = app;

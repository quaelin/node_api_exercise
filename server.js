const app = require('./app');
const config = require('./config.json');

app.listen(config.port, () => {
    console.log(`node_api_exercise app listening on port ${config.port}`);
});

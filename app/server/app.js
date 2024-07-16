import fs from 'fs';
import express from 'express';
import morgan from 'morgan';
import { getPetitions } from './lib/petitions.js';
import { getPetitionsStats } from './lib/petitionsStats.js';
import { jsonPromiseHandler } from './lib/jsonPromiseHandler.js';

export const app = express();
app.set('json spaces', 4);
app.use(morgan('dev'));

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

app.get(
    '/health',
    jsonPromiseHandler(async () => ({ status: 'ALIVE' }))
);

app.get('/webapp.js', function (_, response) {
    response.setHeader('Content-Type', 'text/babel');
    const code = fs.readFileSync('build/bundle.js').toString();

    response.write(code);
    response.end();
});

app.get('/petitions', jsonPromiseHandler(getPetitions, app));
app.get('/petitions-stats', jsonPromiseHandler(getPetitionsStats, app));

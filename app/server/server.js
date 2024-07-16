import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { app } from './inbound/app.js';
import { getConnection } from './db/sql.js';
const port = 3000;

app.listen(port, async () => {
    app.db = await getConnection(`${__dirname}/db/node_api_exercise.sqlite`);
    console.log(`node_api_exercise app listening on port ${port}`);
});

import express from 'express';
import bodyparser from 'body-parser';

import router from './routes/index.js';

const app = express();

app.use(bodyparser.json());
app.use('/api', router);

export default app;

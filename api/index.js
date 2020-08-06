import app from './app.js';
import getConfig from './config.js';

const config = getConfig();

app.listen(config.port, () => {
    console.log(`[dataviz] api running on ${config.port}`);
});

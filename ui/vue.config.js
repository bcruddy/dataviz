// const path = require('path');
const { BASE_URL, DATAVIZ_PROXY_URL } = process.env;

if (DATAVIZ_PROXY_URL) {
    // eslint-disable-next-line no-console
    console.log('Proxying API requests to:', DATAVIZ_PROXY_URL);
}

const proxyConfig = {
    target: DATAVIZ_PROXY_URL || 'http://localhost:7000',
    secure: false,
    changeOrigin: true
};

module.exports = {
    publicPath: BASE_URL || '/',
    lintOnSave: false,
    parallel: true,
    devServer: {
        allowedHosts: ['localhost', 'dataviz.local'],
        public: 'dataviz.local:8080',
        https: true,
        port: 8080,
        proxy: {
            '/api': {
                ...proxyConfig
            }
        }
    }
};

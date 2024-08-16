// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/user',
        createProxyMiddleware({
            target: 'http://localhost:7350', // Your Spring Boot server URL
            changeOrigin: true,
            pathRewrite: {
                '^/user': '/user', // Rewrite URL to match the backend route
            },
        })
    );
};

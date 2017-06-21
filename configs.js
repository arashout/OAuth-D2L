require('dotenv').config();

module.exports.config = () => ({
    clientId: process.env.CLIENT_ID || '',
    clientSecret: process.env.CLIENT_SECRET || '',
    authSite: process.env.AUTH_SITE || 'https://auth.brightspace.com',
    hostUrl: process.env.HOST_URL || ''
});

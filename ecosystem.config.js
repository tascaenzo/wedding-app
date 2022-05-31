require('dotenv').config();

module.exports = {
  apps: [
    {
      name: 'wedding-api',
      script: './dist/apps/api/main.js',
      watch: false,
    },
  ],
};

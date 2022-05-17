
const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStaticMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
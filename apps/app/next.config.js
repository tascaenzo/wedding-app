// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  trailingSlash: true
};

module.exports = withNx(nextConfig);

// const withPWA = require("next-pwa");
// 
// module.exports = withPWA({
//   reactStaticMode: true,
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
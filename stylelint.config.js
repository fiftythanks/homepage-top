/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-concentric-order',
  ],
  ignoreFiles: ['!(./src/**/*.{css, scss, sass}'],
};

module.exports = config;

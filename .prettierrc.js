module.exports = {
  ...require('gts/.prettierrc.json'),
  importOrder: [
    '^((react)|(@storybook))(\/.+)?$',
    '^(.+\/)?(react)-.+$',
    '^@mui\/material(\/[a-z].*)?$',
    '^@mui\/material(-icons)?\/[A-Z].*$',
    '<THIRD_PARTY_MODULES>',
    '^@\/.+$',
    '^(.+)\/.+$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

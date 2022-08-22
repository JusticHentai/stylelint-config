module.exports = {
  extends: [
    './basic', // 基础 注意顺序
    'stylelint-config-standard-scss', // scss
    'stylelint-config-prettier-scss', // prettier scss
  ],
  override: [
    {
      files: ['**/*.scss'],
      rules: {
        // mask 不带前缀会有问题
        'property-no-vendor-prefix': [
          true,
          {
            ignoreProperties: ['mask-image'],
          },
        ],
      },
    },
  ],
}

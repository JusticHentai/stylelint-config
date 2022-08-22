module.exports = {
  extends: [
    './scss', // 基础 注意顺序
    'stylelint-config-recommended-vue/scss',
  ],
  override: [
    {
      files: ['*.vue', '**/*.vue'],
      rules: {
        'unit-allowed-list': ['em', 'rem', 's'],
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

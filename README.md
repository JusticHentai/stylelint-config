# Stylelint-config

continuous integration Stylelint-config

## Install

```bash
npm i @justichentai/stylelint-config
```

## Usage

In `stylelint.config.js`
```js
module.exports = {  
  extends: ['@justichentai/stylelint-config'],  
}
```

单独使用
```js
module.exports = {
  extends: [
    '@justichentai/stylelint-config/basic',
    '@justichentai/stylelint-config/scss'
  ],
}
```

## Info

**dep：**
- `stylelint-config-prettier`：style lint 与 prettier 防止冲突
- `stylelint-config-prettier-scss`：上述的 scss 版
- `stylelint-config-rational-order`：用于排序
- `stylelint-config-standard`：标准配置
- `stylelint-config-standard-scss`：上述的 scss 版
- `stylelint-declaration-block-no-ignored-properties`：提示书写矛盾的样式

**dev：**
- `postcss`：postcss
- `stylelint`：本体

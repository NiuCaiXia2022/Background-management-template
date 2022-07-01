module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    // 解决template 标签爆红
    requireConfigFile: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'error', // 默认
    quotes: 'warn', // 修改为警告
    quotes: 'off', // 修改不校验
    'space-before-function-paren': 'off', //则表示关闭《⽅法名后增加空格》的规则
    "vue/multi-word-component-names":"off",
  }
}

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
    'vue/multi-word-component-names': 'off', //关闭组件命名规则
    'no-tabs': 'warn',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 0, //小括号检测
    'vue/no-useless-template-attributes': 'off', //关闭 template 标签 for循环报错
    ' vue/no-template-key': 'off' //关闭 template 循环
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],
  plugins: ['html']
}

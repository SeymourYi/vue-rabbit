import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
  // 基础配置
  js.configs.recommended,

  // Vue 插件配置
  ...pluginVue.configs['flat/essential'],

  // 自定义配置
  {
    files: ['**/*.{js,mjs,jsx,vue}'], // 需要检查的文件
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // 忽略的文件
    rules: {
      'vue/multi-word-component-names': 'off', // 不强制要求组件名
    },
    languageOptions: {
      ecmaVersion: 'latest', // 使用最新的 ECMAScript 版本
      sourceType: 'module', // 使用 ES 模块
    },
    plugins: {
      vue: pluginVue, // 启用 Vue 插件
    },
  },
];

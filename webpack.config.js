const path = require('path');

module.exports = {
  mode: 'production', // 使用生产模式进行优化
  entry: './src/index.js', // 组件库的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'MyLibrary', // 组件库的全局变量名
      type: 'umd',       // 兼容多种模块系统
    },
    clean: true,          // 构建前清理输出目录
  },
  externals: {
    react: 'react',        // 将 React 和 ReactDOM 设为外部依赖
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 匹配 JavaScript/TypeScript 文件
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // 支持的文件扩展名
  },
};


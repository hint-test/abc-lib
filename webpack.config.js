const path = require('path');

const commonConfig = {
  entry: './src/index.js',
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

// UMD 配置
const umdConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: {
      name: 'MyLibrary',
      type: 'umd',
    },
    clean: true,
  },
};

// ESM 配置
const esmConfig = {
  ...commonConfig,
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.esm.js',
    library: {
      type: 'module',
    },
    module: true,
    clean: false, // 防止覆盖 UMD 文件
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [umdConfig, esmConfig];

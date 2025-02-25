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

const cjsConfig = {
    ...commonConfig,
    mode: 'production',
    optimization: { minimize: false, minimizer: [] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: {
            type: 'commonjs',
        },
        module: false,
    },
};


const esmConfig = {
  ...commonConfig,
  mode: 'production',
  optimization: {minimize: false, minimizer: []},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.esm.js',
    library: {
      // type: 'module',
      type: 'modern-module' // https://webpack.js.org/configuration/output/#type-modern-module Added in v5.93.0, Jul 12 2024
    },
    module: true,
  },
  experiments: {
    outputModule: true,
  },
};

module.exports = [cjsConfig, esmConfig];

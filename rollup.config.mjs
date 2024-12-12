import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'es',
    },
    external: ['react', 'react-dom'],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx'], // 支持解析 .jsx 文件
        }),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            presets: ['@babel/preset-react'],
            extensions: ['.js', '.jsx'], // Babel 也需要识别 .jsx
        }),
    ],
};

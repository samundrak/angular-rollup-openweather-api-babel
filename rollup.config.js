import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'public/javascripts/app.js',
    plugins: [babel()]
};
module.exports = {
    parser: 'tailwindcss',
    plugins: [
        require('postcss-import')(),
        require('tailwindcss/dist'),
    ],
};

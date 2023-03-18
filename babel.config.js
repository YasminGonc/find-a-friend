module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        ssr: false,
      },
    ],
  ],
  env: {
    test: {
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, displayName: false }],
      ],
    },
  },
}

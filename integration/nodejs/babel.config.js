const config = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript'],
  plugins: [
    'effector-logger/babel-plugin',
    {
      inspector: false,
    },
  ],
};

module.exports = config;

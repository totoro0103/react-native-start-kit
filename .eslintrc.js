module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-script-url': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
  globals: {
    document: true,
    window: true,
  },
};

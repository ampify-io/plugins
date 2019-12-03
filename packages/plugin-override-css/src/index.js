const prettier = require('prettier/standalone');
const css = require('prettier/parser-postcss');

export default (options = {}) => {
  const { rules = [] } = options;

  const result = prettier.format(rules.join(''), { parser: 'css', plugins: [css] });
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(result));
  document.head.appendChild(style);
};

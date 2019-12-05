const generate = require('nanoid/generate');
let index = 0;

export default ({ el, targets }) => {
  const id = generate('1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopaasdfghjklzxcvbnm_', 6);
  el.setAttribute('on', `tap:AMP.setState({__ampify__toggle__${id}: !__ampify__toggle__${id}})`);
  el.setAttribute('role', 'button');
  el.setAttribute('tabindex', ++index);
  el.setAttribute('ampify-keep', '');

  targets.forEach(({ el, className, remove = false }) => {
    const cls = remove ? ` (__ampify__toggle__${id} ? ' ${className}': '')` : ` (__ampify__toggle__${id} ? '': ' ${className}')`;
    el.setAttribute('data-amp-bind-class', `'${el.className}' + ${cls}`);
    el.setAttribute('ampify-keep', '');
  });
};

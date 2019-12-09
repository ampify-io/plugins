const getStylesWithoutDefaults = element => {
  const dummy = document.createElement('element-' + new Date().getTime());
  document.body.appendChild(dummy);

  const defaultStyles = getComputedStyle(dummy);
  const elementStyles = getComputedStyle(element);

  const diff = {};
  for (const key in elementStyles) {
    if (elementStyles.hasOwnProperty(key) && defaultStyles[key] !== elementStyles[key]) {
      diff[key] = elementStyles[key];
    }
  }

  dummy.remove();
  return diff;
};

export default (options = {}) => {
  const select = document.querySelector('#cats');
  const span = document.querySelector('#cats-button');

  if (!select) return;

  select.removeAttribute('style');

  for (const [key, value] of Object.entries(getStylesWithoutDefaults(span))) {
    select.style[key] = value;
  }

  span.remove();

  for (const option of select.options) {
    if (option.value) option.value = new URL(option.value, location);
  }

  select.style.width = '100%';

  select.setAttribute('on', 'change:AMP.navigateTo(url=event.value)');
};

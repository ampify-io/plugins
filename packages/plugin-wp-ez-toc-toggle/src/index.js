export default (options = {}) => {
  const container = document.querySelector('#ez-toc-container');
  const ul = container.querySelector('ul.ez-toc-list');

  if (!ul) return;

  ul.removeAttribute('style');

  const width = ul.offsetWidth;

  const rule = `
    .__ampify__ez_toc { width: 0; max-height: 0; transition: all 400ms ease-in-out } 
    .__ampify__ez_toc_show {
        width: ${width}px;
        max-height: 100vh;
    }`;

  const style = document.createElement('style');
  style.innerHTML = rule;

  document.head.appendChild(style);

  ul.classList.add('__ampify__ez_toc');
  ul.setAttribute(
    'data-amp-bind-class',
    `'${ul.className} ' + (ezTocToggle ? '__ampify__ez_toc_show': '')`
  );

  ul.setAttribute('ampify-keep', '');

  const a = document.querySelector('.ez-toc-toggle');
  a.setAttribute('on', `tap:AMP.setState({ezTocToggle: !ezTocToggle})`);
};

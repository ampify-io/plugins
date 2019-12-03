export default (options = {}) => {
  const banner = document.createElement('div');

  banner.classList.add('ampify-banner');
  banner.innerHTML = `<p>Converted to AMP by <a href="https://ampify.io" rel="nofollow" target="_blank">Ampify.io</a></p>`;

  const css = `
    .ampify-banner {
      contain: content style;
      background: #eaeaea;
      display: flex;
      justify-content: center;
      padding: 10px;
      font-family: sans-serif;
      font-size: 16px;
      font-weight: light;
    }

    .ampify-banner p {
      margin: 0;
      padding: 0;
      color: #333;
    }

    .ampify-banner a {
      color: teal;
      font-weight: bolder;
    }
  `;

  const style = document.createElement('style');

  style.appendChild(document.createTextNode(css));

  document.body.appendChild(style);
  document.body.appendChild(banner);
};

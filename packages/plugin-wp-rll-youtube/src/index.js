export default () => {
  const videos = document.querySelectorAll('.rll-youtube-player');

  videos.forEach(el => {
    const video = el.nextSibling;
    let innerHTML;

    const d = document.createElement('div');
    d.innerHTML = video.innerHTML;

    const iframe = d.querySelector('iframe');

    if (iframe) innerHTML = iframe.outerHTML;

    const noScript = d.querySelector('noscript');

    if (noScript) innerHTML = noScript.innerHTML;

    el.innerHTML = innerHTML;
  });
};

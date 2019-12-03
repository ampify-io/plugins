import { run } from "./";

beforeAll(() => {
    // language=HTML
    document.documentElement.innerHTML = `<html><body><div class="rll-youtube-player" data-id="uJ2T8iyvFRk" data-query="feature=oembed"><div data-id="uJ2T8iyvFRk" data-query="feature=oembed"><img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/uJ2T8iyvFRk/hqdefault.jpg" alt="" width="480" height="360" class="lazyloaded" src="https://i.ytimg.com/vi/uJ2T8iyvFRk/hqdefault.jpg" data-was-processed="true"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript><div class="play"></div></div></div><noscript><iframe title="מדריך קידום אתרים - שלב 1: מה זה קובץ robots.txt ואיך להגדיר אותו" width="800" height="450" src="https://www.youtube.com/embed/uJ2T8iyvFRk?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></noscript></body></html>
`;
});


test('run', () => {
    run();
    expect(document.documentElement.innerHTML).toMatchSnapshot();
});
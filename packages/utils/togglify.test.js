const generate = require('nanoid/generate');

jest.mock('nanoid/generate', () => {
  return jest.fn().mockImplementation(() => '123456');
});

import toggle from './togglify';

beforeAll(() => {
  // language=HTML
  document.documentElement.innerHTML = `<html><head></head><body><div class="wprm-wrapper"><div id="wprmenu_bar" class="wprmenu_bar normalslide right"><div class="hamburger hamburger--slider"> <span class="hamburger-box"> <span class="hamburger-inner"></span> </span></div><div class="menu_title"> <a href="/"><img class="bar_logo lazyloading" alt="logo" src="https://www.idanbenor.co.il/wp-content/uploads/2018/10/logo.png" data-was-processed="true"></a></div></div><div class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right default" id="mg-wprm-wrap"><ul id="wprmenu_menu_ul"><li id="menu-item-2825" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2825"><a href="https://www.idanbenor.co.il/about/">אודות</a></li><li id="menu-item-2826" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2826"><a href="https://www.idanbenor.co.il/contact/">צור קשר</a></li><li id="menu-item-2827" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-71 current_page_item menu-item-2827"><a href="https://www.idanbenor.co.il/blog/" aria-current="page">בלוג קידום אתרים</a></li></ul></div></div></body></html>`;
});

test('toggle', () => {
  const el = document.querySelector('.hamburger-box');

  const targets = [
    {
      el: document.querySelector('#wprmenu_bar'),
      className: 'active'
    },

    {
      el: document.querySelector('.hamburger.hamburger--slider'),
      className: 'is-active'
    },

    {
      el: document.querySelector('#mg-wprm-wrap'),
      className: 'cbp-spmenu-open'
    }
  ];

  toggle({ el, targets });

  expect(document.documentElement.outerHTML).toMatchSnapshot();
});

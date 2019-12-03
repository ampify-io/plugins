import togglify from '@ampify/utils/togglify';

export default (options = {}) => {
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

  const el = document.querySelector('.hamburger-box');

  togglify({ el, targets });

  return {
    classes: ['active', 'is-active', 'cbp-spmenu-open']
  };
};

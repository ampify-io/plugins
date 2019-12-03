export default (options = {}) => {
  const forms = document.querySelectorAll('form');

  [...forms].forEach(form => {
    if (!form) return;

    const action = new URL(form.getAttribute('action'), location);

    form.setAttribute('action', action.toString());

    const method = form.getAttribute('method');

    if (method === 'post') {
      form.removeAttribute('action');
      form.setAttribute('action-xhr', '//api.ampify.io/forms');
      form.setAttribute('target', 'top');
      form.setAttribute('novalidate', 'novalidate');

      const divError = document.createElement('div');
      const divSuccess = document.createElement('div');
      const divSubmitting = document.createElement('div');

      divError.setAttribute('submit-error', '');
      divSuccess.setAttribute('submit-success', '');
      divSubmitting.setAttribute('submitting', '');

      const inputAction = document.createElement('input');
      inputAction.setAttribute('type', 'hidden');
      inputAction.setAttribute('name', 'action');
      inputAction.setAttribute('value', action.toString());

      form.appendChild(inputAction);
      form.appendChild(divError);
      form.appendChild(divSuccess);
      form.appendChild(divSubmitting);

      divError.innerHTML = `<template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #F44336; clear: both;">Unable to submit Form.</p></template>`;
      divSuccess.innerHTML = `<template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #009688; clear: both;">Form submitted successfully.</p></template>`;
      divSubmitting.innerHTML = `<template type="amp-mustache"><p style="padding: 1.5rem; direction: ltr; color: #607D8B; clear: both;">Submitting...</p></template>`;

      [...form.querySelectorAll('input[type=hidden]')].forEach(el => {
        el.classList.add('ampify-ignore-hidden');
      });
    }
  });
};

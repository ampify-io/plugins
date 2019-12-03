# Ampify Utils

Utilities to use in plugins.

### togglify

Generate amp toggle events on targets

Accepts object:

- `el` - The element to tap
- `targets` - Array of objects with el and class to toggle

Example:
```javascript
const el = document.querySelector('.hamburger');

const targets = [
{
  el: document.querySelector('#menu'),
  className: 'active'
},

{
  el: document.querySelector('#submenu'),
  className: 'is-open'
}
];

toggle({ el, targets });
```


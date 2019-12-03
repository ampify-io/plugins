# Ampify Plugins

> A monorepo for Ampify's open source plugins and utilities.

### Plugins

- [Ampify Banner](./packages/plugin-ampify-banner)
- [Forms](./packages/plugin-forms)
- [Jquery UI Select](./packages/plugin-jquery-ui-select)
- [Override CSS](./packages/plugin-override-css)
- [WP EZ Toc](./packages/plugin-wp-ez-toc-toggle)
- [WP RLL YouTube](./packages/plugin-wp-rll-youtube)
- [WP RMenu](./packages/plugin-wp-ez-toc-toggle)

### Utils

- [Utils](./packages/utils)

### A plugin

Plugin is just an exported function, you have complete control
on the document as in the browser.

Example:

```javascript
export default () => {
  const el = document.querySelector('.menu');
};
```

You cam also use module.exports:

```javascript
module.exports = () => {
  const el = document.querySelector('.menu');
};
```

### Plugin return object

Plugin can return an object with some settings:

- `classes` - Array of classes to not shorten.

Example:

```javascript
export default () => {
  //...plugin logic here

  return {
    classes: ['is-open', 'menu', 'header']
  };
};
```

### Build

Use `yarn build` command to create a bundled plugin in the dist folder.

### Manually create plugin

Plugin is just a function exposed on the window object,
you can do it manually, however it is easier to use webpack configuration
and build it to use 3rd party dependencies.

Example:

```javascript
window.myCustomPlugin = () => {
  //...plugin logic goes here.
};
```

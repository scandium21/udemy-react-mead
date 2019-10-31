'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  )
);
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

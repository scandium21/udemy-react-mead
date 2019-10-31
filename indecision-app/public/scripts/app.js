'use strict';

console.log('App.js is running');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'Does this change?'
);
// transformed from babel
// let template = React.createElement(
//   'p',
//   {
//     id: 'someid'
//   },
//   'This is JSX from app.js!'
// );
var appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

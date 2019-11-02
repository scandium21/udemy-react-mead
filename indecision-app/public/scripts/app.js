'use strict';

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

// practice
// create app object title/subtitle
// use title/subtitle in the template
// render template
var app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['one', 'two']
};

// practice:
// only render the subtitle (and p tag) if subtitle exists - logical and operator
// conditionally render new p tag - if options.length > 0 "Here are your options" "no options"

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item One'
    ),
    React.createElement(
      'li',
      null,
      'Item Two'
    )
  )
);

var appRoot = document.querySelector('#app');

var user = {
  name: 'Nancy',
  age: 47,
  loc: 'New York'
};
var userName = 'Lucy';
var userAge = 27;
var userLoc = 'Calgary';

var getLocation = function getLocation(loc) {
  if (loc) return React.createElement(
    'p',
    null,
    'Location: ',
    loc
  );
};
// create a templateTwo var JSX expression
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.loc),
  undefined,
  true,
  false,
  null
);

ReactDOM.render(template, appRoot);

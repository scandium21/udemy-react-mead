console.log('App.js is running');

// JSX - Javascript XML
// let template = <p>This is JSX from app.js!</p>;
// transformed from babel
let template = React.createElement(
  'p',
  {
    id: 'someid'
  },
  'This is JSX from app.js!'
);
let appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

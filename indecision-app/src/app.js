console.log('App.js is running');

// JSX - Javascript XML
let template = <h1>Does this change?</h1>;
// transformed from babel
// let template = React.createElement(
//   'p',
//   {
//     id: 'someid'
//   },
//   'This is JSX from app.js!'
// );
let appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

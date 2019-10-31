// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

// JSX - Javascript XML
let template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
  </div>
);
let appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);

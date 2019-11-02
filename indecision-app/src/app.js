// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App.js is running');

// practice
// create app object title/subtitle
// use title/subtitle in the template
// render template
const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer!',
  options: ['one', 'two']
};

// practice:
// only render the subtitle (and p tag) if subtitle exists - logical and operator
// conditionally render new p tag - if options.length > 0 "Here are your options" "no options"

// JSX - Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? `Here are your options` : `No options`}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const appRoot = document.querySelector('#app');

const user = {
  name: 'Nancy',
  age: 47,
  loc: 'New York'
};
const userName = 'Lucy';
const userAge = 27;
const userLoc = 'Calgary';

const getLocation = loc => {
  if (loc) return <p>Location: {loc}</p>;
};
// create a templateTwo var JSX expression
const templateTwo = (
  <div>
    {/* what goes inside the {any js expression}  */}
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.loc)}
    {/* the following will not render into anything */}
    {undefined}
    {true}
    {false}
    {null}
    {/* true && (2nd cond) --> will use the 2nd cond if it's true */}
  </div>
);

ReactDOM.render(template, appRoot);

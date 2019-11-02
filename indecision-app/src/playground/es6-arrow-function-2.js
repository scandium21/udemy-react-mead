// arguments object - no longer bound with arrow functions

const add = function(a, b) {
  console.log(arguments); // [55, 1, 1001, callee: (...) ...]
  return a + b;
};

const addAF = (a, b) => {
  console.log(arguments); // arguments is not defined (use es5 if need arguments)
  return a + b;
};

console.log(add(55, 1, 10001));

// this keyword - no longer bound

const user = {
  name: 'SC',
  cities: ['Chicago', 'San Jose'],
  // places where you don't want to use arrow functions
  // 'this' will not be bound to the 'user' object if use arrow function for printPlacesLived
  printPlacesLived() {
    console.log(this.name); // SC
    console.log(this.cities); // Chicago, San Jose

    const that = this;
    this.cities.forEach(function(city) {
      console.log(`${that.name} has lived in ${city}`);
      // cannot read property 'name' of undefined
    });
    // with es6 arrow functions, the functions no longer bind their own 'this' value
    // instead, they just use 'this' value of the context they were created in
    this.cities.forEach(city => {
      console.log(`${this.name} has lived in ${city}`);
      // SC has lived in Chicago  SC has lived in San Jose
    });
  }
};

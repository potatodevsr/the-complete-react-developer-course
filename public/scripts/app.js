"use strict";

console.log('App.js is running!');
// JSX - Javascript XML
var app = {
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, " ", app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item One"), /*#__PURE__*/React.createElement("li", null, "Item Two")));
var user = {
  name: 'Chadapohn',
  age: 26,
  location: 'Thailand'
};
function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

// const templateTwo = (
//     <div>
//         <h1>
//             {user.name ? user.name : 'Anonymous'}
//         </h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// )

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};
var renderCounterApp = function renderCounterApp() {
  var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
    onClick: addOne
  }, "+1"), /*#__PURE__*/React.createElement("button", {
    onClick: minusOne
  }, "-1"), /*#__PURE__*/React.createElement("button", {
    onClick: reset
  }, "Reset"));
  var appRoot = document.getElementById('app');
  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();

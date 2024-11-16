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
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

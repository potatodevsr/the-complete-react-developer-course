"use strict";

console.log('App.js is running!');
// JSX - Javascript XML
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecicision App"), /*#__PURE__*/React.createElement("p", null, "This is some info"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item One"), /*#__PURE__*/React.createElement("li", null, "Item Two")));
var userName = 'Chadapohn';
var userAge = 27;
var userLocation = 'Thailand';
var user = {
  name: 'Chadapohn',
  age: 26,
  location: 'Thailand'
};
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);

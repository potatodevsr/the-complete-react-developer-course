"use strict";

var visibility = false;
var toggleVisibility = function toggleVisibility() {
  visibility = !visibility; //false or true
  render();
};
var render = function render() {
  var jsx = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
    onClick: toggleVisibility
  }, visibility ? 'Hide details' : 'Show details'), visibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Hey. These are some details")));
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();

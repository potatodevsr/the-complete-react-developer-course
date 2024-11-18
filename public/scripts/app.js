"use strict";

console.log('App.js is running!');
// JSX - Javascript XML
var app = {
  title: 'Some title',
  subtitle: 'This is my subtitle',
  options: []
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render(); // Call the correct render function
  }
};
// onRemoveAll
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render(); // Call the correct render function
};
var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length); // Fixed the typo
  var option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};
var appRoot = document.getElementById('app');
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("p", null, "Total options: ", app.options.length), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length === 0,
    onClick: onMakeDecision
  }, "What Should I do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, "Option: ", option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

// Initial render
render();
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

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     // const appRoot = document.getElementById('app');

//     // ReactDOM.render(templateTwo, appRoot);
// }

// const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// renderCounterApp();

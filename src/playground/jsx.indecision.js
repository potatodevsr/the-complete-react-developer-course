console.log('App.js is running!');
// JSX - Javascript XML
const app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render(); // Call the correct render function
    }
};
// onRemoveAll
const onRemoveAll = () => {
    app.options = [];
    render(); // Call the correct render function
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); // Fixed the typo
    const option = app.options[randomNum];
    alert(option);
    console.log(randomNum);
};

const appRoot = document.getElementById('app');
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>Total options: {app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {app.options.map((option) => (
                    <li key={option}>Option: {option}</li>
                ))}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

// Initial render
render();



const user = {
    name: 'Chadapohn',
    age: 26,
    location: 'Thailand'
}

function getLocation(location) {
    if (location) {
        return <p>
            Location: {location}
        </p>;
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
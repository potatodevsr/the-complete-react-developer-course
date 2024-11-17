console.log('App.js is running!');
// JSX - Javascript XML
const app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>
            {app.title}
        </h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p> {app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>
                Item One
            </li>
            <li>
                Item Two
            </li>
        </ol>
    </div >
)

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

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    const appRoot = document.getElementById('app');

    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
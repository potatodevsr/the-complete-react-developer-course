console.log('App.js is running!');
// JSX - Javascript XML
var app = {
    title: 'Some title',
    subtitle: 'This is my subtitle',
    options: ['One', 'Two']
}

var template = (
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

var user = {
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

var templateTwo = (
    <div>
        <h1>
            {user.name ? user.name : 'Anonymous'}
        </h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
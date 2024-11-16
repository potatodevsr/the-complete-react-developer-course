console.log('App.js is running!');
// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecicision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var userName = 'Chadapohn';
var userAge = 27;
var userLocation = 'Thailand';

var user = {
    name: 'Chadapohn',
    age: 26,
    location: 'Thailand'
}

var templateTwo = (
    <div>
        <h1>
            {user.name}
        </h1>
        <p>
            Age: {user.age}
        </p>
        <p>
            Location: {user.location}
        </p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Pput your life in the hands of a computer</h2>
            </div>
        )
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options Component here
                <Option />
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                Option Component here
            </div>
        )
    }
}


class AddOption extends React.Component {
    render() {
        return (
            <div>
                AddOption Component here
            </div>
        )
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>

)
ReactDOM.render(jsx, document.getElementById('app'));
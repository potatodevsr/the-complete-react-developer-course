// const obj = {
//     name: 'Chadapohn',
//     getName() {
//         return this.name;
//     }
// }

// const getName = obj.getName.bind({ name: 'Tanoo' });

// console.log('obj getName = ', obj.getName());


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handelDeleteOptions = this.handelDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        }
    }

    handelDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handelDeleteOptions={this.handelDeleteOptions}
                />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Indecision</h1>
                <h2>{this.props.title}</h2>
            </div>
        )
    }

}

class Action extends React.Component {
    render() {
        return (
            <div>
                {/* <button onClick={this.handlePick}>What should I do?</button> */}
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>

        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handelDeleteOptions}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} OptionText={option} />)}
            </div>
        )
    }
}
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.OptionText}
            </div>
        )
    }
}

class AddOption extends React.Component {

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>App Option</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
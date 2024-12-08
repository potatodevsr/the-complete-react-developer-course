class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                {/* <button onClick={this.handlePick}>What should I do?</button> */}
                <button onClick={() => alert('handle Pick')}>What should I do?</button>

            </div>

        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {/* {this.props.options.length} */}

                {/*  Render new p tag each option (set text, set key) */}

                {/* {this.props.options.map((option) => <p key={option}>{option}</p>)} */}
                <button onClick={() => alert('remove All')}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} OptionText={option} />)}
                {/* การวนลูปเพื่อสร้างคอมโพเนนต์ <Option> สำหรับทุกๆ ค่าใน options โดยส่งค่าของแต่ละ option ไปให้เป็น props เพื่อใช้ใน Component ชื่อ Option */}
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
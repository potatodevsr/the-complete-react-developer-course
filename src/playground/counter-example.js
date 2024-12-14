class Counter extends React.Component {
    // ฟังก์ชัน handleAddOne, handleMinusOne, และ handleReset ถูกผูกกับ context ของคลาส Counter ใน constructor.
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };

    }
    // Creat three methods: handleAddOne, handleMinusOne, handleReset
    handleAddOne() {
        // this.state.count = this.state.count + 1;
        this.setState((prevState) => {
            return {
                // count: 1
                count: prevState.count + 1
            }
        });
        console.log('onClick +1 = ', this.state);
    }
    handleMinusOne() {
        // this.state.count = this.state.count - 1;
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
        console.log('onClick -1 = ', this.state);
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
        // this.setState({
        //     count: 0
        // });
        // this.setState({
        //     count: this.state.count + 1
        // });
        console.log('handleReset');
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                {/* Wire up onClick & bind in the constructor */}
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={12} />, document.getElementById('app'));
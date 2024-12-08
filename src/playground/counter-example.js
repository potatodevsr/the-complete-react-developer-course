class Counter extends React.Component {
    // ฟังก์ชัน handleAddOne, handleMinusOne, และ handleReset ถูกผูกกับ context ของคลาส Counter ใน constructor.
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
    // Creat three methods: handleAddOne, handleMinusOne, handleReset
    handleAddOne() {
        console.log('handleAddOne');
    }
    handleMinusOne() {
        console.log('handleMinusOne');
    }
    handleReset() {
        console.log('handleReset');
    }
c
    render() {
        return (
            <div>
                <h1>Count: </h1>
                {/* Wire up onClick & bind in the constructor */}
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));
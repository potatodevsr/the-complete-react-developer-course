class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                    {/* ถ้า visibility เป็น true แสดงปุ่ม "Hide details" และแสดงข้อความรายละเอียด.
                        ถ้า visibility เป็น false แสดงปุ่ม "Show details" และซ่อนข้อความรายละเอียด. */}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details</p>
                    </div>
                )}
            </div>
        )

    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
// visibility -> false

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility; //false or true
//     render();
// }

// const render = () => {
//     const jsx = (
<div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
    </button>
    {visibility && (
        <div>
            <p>Hey. These are some details</p>
        </div>
    )}
</div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();
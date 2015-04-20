// LICENSE : MIT
"use strict";
export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }
    
    tick() {
        this.setState({
            count: this.state.count + 1
        });
    }
    
    render() {
        return (
            <div onClick={this.tick.bind(this)}>
                Clicks: {this.state.count}
            </div>
        );
    }
}
React.render(
    React.createElement(Component),
    document.body
);
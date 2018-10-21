import React, {Component} from 'react';

class Action extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAll}>Remove all</button>
            </div>
        )
    }
}

export default Action;
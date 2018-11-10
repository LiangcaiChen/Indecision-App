import React, {Component} from 'react';

class Action extends Component {
    render() {
        return (
            <div>
                <button
                    className="button button--link"
                    onClick={this.props.removeAll}>Remove all</button>
            </div>
        )
    }
}

export default Action;
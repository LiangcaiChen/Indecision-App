import React, {Component} from 'react';

class Choice extends Component {
    render() {
        return (
            <div>
                <button
                    className="big-button"
                    onClick={this.props.pickOption}>What should I pick?</button>
            </div>
        )
    }
}

export default Choice;
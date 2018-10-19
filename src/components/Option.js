import React, {Component} from 'react';

class Option extends Component {
    render() {
        return (
            <li>
                {this.props.opText}
                <button
                    onClick={(e)=>this.props.handleRemoveSingleOption(this.props.opText)}
                >Remove</button>
            </li>

        )
    }
}

export default Option;
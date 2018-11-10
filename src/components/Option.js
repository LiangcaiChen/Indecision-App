import React, {Component} from 'react';

class Option extends Component {
    render() {
        return (
            <li>
                {this.props.opText}
                <button
                    className="button button--link"
                    onClick={(e)=>this.props.handleRemoveSingleOption(this.props.opText)}
                >Remove</button>
            </li>

        )
    }
}

export default Option;
import React, {Component} from 'react';
import Option from './Option';

class Options extends Component {
    render() {
        return (
            <ol>
                {this.props.options.map((op)=>(
                    <Option
                        key={op}
                        opText={op}
                        handleRemoveSingleOption={this.props.removeSingleOption}/>
                ))}

            </ol>
        )
    }
}

export default Options;
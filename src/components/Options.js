import React, {Component} from 'react';
import Option from './Option';

let uuid4 = require('uuid4');

class Options extends Component {
    addOption = (e) => {
        e.preventDefault();

        console.log(e.target.value.option.input);
        // this.props.addOption(e.target.option);
    };

    render() {
        return (
            <div>
                {this.props.options.length===0 && <p>Please add an option to get started!</p>}
                <ol>
                    {this.props.options.map((op)=>(
                        <Option
                            key={uuid4()}
                            opText={op}
                            handleRemoveSingleOption={this.props.removeSingleOption}/>
                    ))}

                </ol>

            </div>
        )
    }
}

export default Options;
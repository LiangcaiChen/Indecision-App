import React, {Component} from 'react';
import Option from './Option';

class Options extends Component {
    addOption = (e) => {
        e.preventDefault();

        console.log(e.target.value.option.input);
        // this.props.addOption(e.target.option);
    };

    render() {
        return (
            <div>
                <ol>
                    {this.props.options.map((op)=>(
                        <Option
                            key={op}
                            opText={op}
                            handleRemoveSingleOption={this.props.removeSingleOption}/>
                    ))}

                </ol>

            </div>
        )
    }
}

export default Options;
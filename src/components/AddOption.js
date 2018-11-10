import React, {Component} from 'react';

class AddOption extends Component {
    addOption = (e) => {
        e.preventDefault();

        console.log(e.target.option.value);
        let optionText = e.target.option.value;
        this.props.addOption(optionText);

        e.target.option.value = '';
    };

    render() {
        return (
            <form onSubmit={this.addOption}>
                <input type="text" name="option"/>
                <button className="button">Add Option</button>
            </form>
        )
    }
}

export default AddOption;
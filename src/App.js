import React, { Component } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import Action from "./components/Action";
import AddOption from "./components/AddOption"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['book1','book2','book3']
        }
    }

    handleRemoveSingleOption= (option) => {
        this.setState((prevState)=>({
                options: prevState.options.filter((op)=>op!==option)
        }));

        console.log('Remove',option);
    };

    handleAddOption = (option) => {
        this.setState((prevState)=>({
            options: prevState.options.concat(option)
        }))
    };

    render() {
        return (
            <div>
                <Header title="Indecision App"/>
                <Options
                    options={this.state.options}
                    removeSingleOption={this.handleRemoveSingleOption}
                />
                <AddOption addOption = {this.handleAddOption}/>
            </div>
        );
    }
}

export default App;
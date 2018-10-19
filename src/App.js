import React, { Component } from 'react';
import Header from './components/Header';
import Options from './components/Options';

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

    render() {
        return (
            <div>
                <Header title="Indecision App"/>
                <Options
                    options={this.state.options}
                    removeSingleOption={this.handleRemoveSingleOption}/>
            </div>
        );
    }
}

export default App;

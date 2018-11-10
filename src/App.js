import React, { Component } from 'react';
import Header from './components/Header';
import Options from './components/Options';
import Choice from "./components/Choice";
import AddOption from "./components/AddOption";
import Action from './components/Action';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: ['book1','book2','book3']
        }
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handlePickOption = () => {
      let picked = this.state.options[Math.floor(Math.random()*this.state.options.length)];
      alert(picked);
    };

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

    handleRemoveOptions = () => {
        this.setState({options: []});
    };

    render() {
        return (
            <div>
                <Header title="Indecision App"/>

                <div className="container">
                    <Choice pickOption={this.handlePickOption}/>
                    <Action removeAll={this.handleRemoveOptions}/>
                    <Options
                        options={this.state.options}
                        removeSingleOption={this.handleRemoveSingleOption}
                    />
                    <AddOption addOption = {this.handleAddOption}/>
                </div>
            </div>
        );
    }
}

export default App;
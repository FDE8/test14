import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name} = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="name">Nom</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={name} 
                    onChange={this.handleChange} />
                    <button type="Commencer">
                    Commencer
                </button>
            </form>
        );
    }
}

export default Form;
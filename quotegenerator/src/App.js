import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
    // Global Component
    state = {
        Generate: ''
    };

    // Invoked Immediately after the component is mounted
    componentDidMount() {
        this.fetchQuote();
        // console.log('Component Mounted');
    }

    fetchQuote = () => {
        axios.get('	https://api.adviceslip.com/advice') //Used to fetch the request
            .then((res) => {
                const { advice } = res.data.slip; //Destructuring the json object 

                this.setState({ advice });
                console.log(advice);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    render() {
        const { advice } = this.state;

        return (
            <div className="app">
                <div className="display">
                    <h1 className="quote">{advice}</h1>
                    <button className="button" onClick={this.fetchQuote}>
                        <span>Generate</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
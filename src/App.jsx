import React, { Component } from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import Clock from './Clock.jsx';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadline: ''

        }
    }

    changeDeadline() {
        console.log('state:', this.state);
        this.setState({deadline: this.state.newDeadline});
        //this.setState({deadline: 'November 20, 2018'})
    }
    
    render(){
       return (
            <div className='App'>
                <div className='App-title'>Countown To {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} ></Clock>
                <Form>
                    <FormControl 
                        className='Deadline-input'
                        onChange={event => this.setState({newDeadline: event.target.value})} 
                        placeholder='new date'>
                    </FormControl>
                    <Button onClick= {() => this.changeDeadline()}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default App;
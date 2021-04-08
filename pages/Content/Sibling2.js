import React, { Component } from 'react';
import Sibling1 from './Sibling1.js';


function updateText(text) {
    this.setState({text})
  }

class Sibling2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Initial State"
        }
        updateText = updateText.bind(this)
    }
    render() {
        return (
            <div>
                <div >I am Sibling 2</div>
                <div >{this.state.text}</div>
            </div>
        )
    }
  }
  export default Sibling2;
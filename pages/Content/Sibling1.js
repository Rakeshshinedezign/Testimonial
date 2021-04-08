import React, { Component } from 'react';
//import { style, primaryColor, secondaryColor } from '../style';
class Sibling1 extends Component {
  render() {
      return (
          <div>
              <div >Multiple crouser Template will show here</div>
              {/* <input  type="text" 
               placeholder="Write text" onChange={(e) => updateText(e.target.value)} /> */}
          </div>
      )
  }
}
function updateText(text) {
    this.setState({text})
  }
export default Sibling1;
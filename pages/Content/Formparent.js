import React, { Component} from 'react';
import Testimonialcontentform from '../Testimonialcontentform.js';
import {Card, Tabs , Button , TextField} from '@shopify/polaris';
import CollapsForm from './collapse.js';
import Link from 'next/link';
import { Provider } from "react-redux";
import store from './redux/store.js';




class Formparent extends React.Component{ 
      constructor(props){
        super(props);
        this.state =  {
          id: 0,
          data:this.props.dataSent,
          value: 'hide', 
          inputvalue:['a' , 'b']
          
         
        }
        
        this.children = this.children.bind(this);
        this.addChild = this.addChild.bind(this);
        this.addform = this.addform.bind(this);
        this.updategetData = this.updategetData.bind(this);
        //this.triggerAddTripState = this.triggerAddTripState.bind(this);
       
      }
      children(){
        return(
          <div>
            {this.state.data.map(element => {
              return(
                <Card sectioned>                                  
                  <Button primary onClick={this.addform} >  Click to Show Content Form</Button>
                  {/* <Testimonialcontentform /> */}
                  {/* <TextField value=""  label=" Heading"  /> */}                  
                </Card>
                
              )
            })}
          </div>
        )
      }
      render () { 
       
        return (
          <>
            
            {/* <div>                            
                <Button fullWidth onClick={this.addChild}>Add Form Data</Button> 
                  <div id="children-pane">
                    {this.children()}
                  </div>
            </div> */}
          <div className="">
            {
              (() => {
                  if (this.state.value == 'hide') 
                      return (
                          <div>                            
                              <Button fullWidth onClick={this.addChild}>Add Form Data</Button> 
                                <div id="children-pane">
                                  {this.children()}
                                  {this.state.id}                                 
                                </div>
                          </div>
                      )                    
                  else (this.state.value == 'show')
                      return <div>
                        <Provider store={store}>
                          <Testimonialcontentform />
                        </Provider>
                        </div> 
              })()
            }
            
          </div>
          </>
        );
      }
      updategetData = () =>{
        this.setState({
          inputvalues:{},
        });
        console.log(this.state.inputvalues)
      }
      // triggerAddTripState = () => {
      //   this.setState({
      //     ...this.state,
      //     isEmptyState: false,
      //     isAddTripState: true
      //   })
      // }
      addform = () =>{
        this.setState({
          value:'show'
        });
        console.log(this.state.value)
      }

      addChild = () => {        
        this.setState({
          id: this.state.id + 1
        });
          
        let formData = {
          "heading":"",
          "content":""
        }
        this.state.data.push(formData);
        this.props.clickFunc(this.state.data);
        //this.props.formshowhide(this.state.data);
      }
    }

    // const AddTripButton = (props) => {
    //   return <Button primary onClick={props.addTrip}>Add Content Form</Button>
    // }

  export default Formparent;
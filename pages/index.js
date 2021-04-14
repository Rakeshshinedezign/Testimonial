import React, {useCallback, useState} from 'react';
import { Heading, Page } from "@shopify/polaris";
import {Button} from '@shopify/polaris';
import Dashboard from "./Dashboard.js";
//import Header from './Header.js'
import TableData from './Tabledata.js';
import AddTripButton from './test.js';
import { TextField, Form, FormLayout , DatePicker} from '@shopify/polaris';
import {Stack, RadioButton} from '@shopify/polaris';
import Header from './Header.js';
import Parent from './test.js';

import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from './Content/redux/store';



console.log(store);
function Index() {
   return (
     <>
     <Provider store={store}>
          <Dashboard />
     </Provider>
     
          {/* <Parent />  */}
     </>

         
   
  )
}

export default Index;
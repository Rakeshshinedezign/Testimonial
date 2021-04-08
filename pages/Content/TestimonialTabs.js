import React, {useCallback, useState} from 'react';
import {Card, Tabs , Button} from '@shopify/polaris';
import Testimonialcontentform from '../Testimonialcontentform.js';
import Shortcode from './Shortcode.js';
import Styleconfig from './Styleconfig.js';
import Formparent from './Formparent.js';

import { Provider } from "react-redux";
import store from './redux/store.js';


function TestimonialTabs() {
    const [selected, setSelected] = useState(0);
    const [data,setData] = useState([]);
    
    const handleTabChange = useCallback(
      (selectedTabIndex) => setSelected(selectedTabIndex),
      [],
    );
    
    console.log(data);
    const tabs = [
      {
        id: 'content-configration-1',
        content: 'Content Configration',        
        panelID: 'content-configration',
       
      },
      {       
        id: 'style-configration-1',
        content: 'Style Configration',
        panelID: 'style-configration',
      },
      {
        id: 'short-code-1',
        content: 'Short Code',
        panelID: 'short-code',
      },
      
    ];

    function updateTheData(arr){
        setData(arr);
    }
  
    return (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}> 
          <Card.Section title={tabs[selected].content}>
            {/* <p>Tab {selected} selected</p> */}
           
            <div className="content">
                {
                (() => {
                    if (selected == '0') 
                        return (
                            <div> 
                               <Formparent dataSent={data} clickFunc={updateTheData} /> 
                            </div>
                        )
                    if (selected == '1')
                        return(
                            <div>
                                <Provider store={store}>
                                  <Styleconfig /> 
                                </Provider>                          
                            </div>
                        )
                    if (selected == '2')
                    return(
                        <div>
                            <Shortcode />
                        </div>
                    ) 
                })()
                }
            </div>           
          </Card.Section>
        </Tabs>
      </Card>
    );
  }
export default TestimonialTabs;

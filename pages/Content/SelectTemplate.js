import Link from 'next/link'; 
import React, {useCallback, useState} from 'react';
import {Stack, RadioButton , Button , Page , Heading , Card ,Thumbnail} from '@shopify/polaris';
//import { useDispatch } from 'react-redux';
import Sibling1 from './Sibling1.js';

//import { styleAdd } from './redux/styleslice.js';


function Content() {
    const [value, setValue] = useState('multiple');
  //console.log(value);
  //const dispatch = useDispatch();

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
  );
//   const onSavePostClicked = () => {
//     if (value) {
//       dispatch(
//         styleAdd({        
//           value          
//         })
//       )     
//     }
//   }
    //  const logo = require('./image/multiple.png');

    return (
        <>  
            <Link href="/" >
                <Button>Go Back</Button>
            </Link>
            <Page>
               
                <Heading>Select Template</Heading>
                {/* <img src={logo} /> */}
                
                {/* <img src={require(./image/multiple.png)}  /> */}
                <div className="template">
                    <Card>
                        <RadioButton
                            label="Multiple Crousel"        
                            checked={value === 'multiple'}
                            id="multiple"        
                            name="template"
                            onChange={handleChange}
                        /> 
                            <Thumbnail
                                source="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/multiple.png?v=1617873990"
                                
                                alt="Black choker necklace"
                                height="200px" width="300px"
                            />                       
                            {/* <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/multiple.png?v=1617873990" height="200px" width="300px" /> */}
                       
                    </Card>
                    <Card>
                    <RadioButton
                        label="Single Crouser" 
                        name="template"
                        checked={value === 'single'}
                        id="single"
                        onChange={handleChange}
                    />
                     <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/single.png?v=1617873990"  height="200px" width="300px" />
                     </Card>
                    <Card>
                    <RadioButton
                        label="Grid" 
                        name="template"
                        checked={value === 'grid'}
                        id="grid"
                        onChange={handleChange}
                    />
                     <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/grid.png?v=1617873990"  height="200px" width="300px"/>
                     </Card>
                    <Card>
                    <RadioButton
                        label="List Style" 
                        name="template"
                        checked={value === 'list'}
                        id="list"
                        onChange={handleChange}
                    />
                     <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/list.png?v=1617873990"  height="200px" width="300px"/>
                     </Card>
                    <Card>
                    <RadioButton
                        label="Row Wise show" 
                        name="template"
                        checked={value === 'row'}
                        id="row"
                        onChange={handleChange}
                    />
                     <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/files/multiple.png?v=1617873990" height="200px" width="300px" />
                     </Card>
                     </div>
                    
                     <Link href="Content" >
                        <Button primary >Use This Template</Button>
                     </Link>
                
                
            </Page>
            
            
        </>
    ); 
};
export default Content;
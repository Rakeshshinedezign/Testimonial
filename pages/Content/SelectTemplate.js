import Link from 'next/link'; 
import React, {useCallback, useState} from 'react';
import {Stack, RadioButton , Button , Page , Heading , Card ,Thumbnail , TextContainer, Modal ,Checkbox} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import { styleAdd } from './redux/styleslice';
import { ratingAdd } from './redux/ratingslice';

import { Provider } from "react-redux";
//import store from './redux/store'
import store from './redux/store';

 
function Content() {
    // const form2 = useSelector(state => state.form)
    // console.log(form2);
    const dispatch = useDispatch();
    
    const [active, setActive] = useState(false);
    const modalshow = useCallback(() => setActive(!active), [active]);
    const activator = <Button onClick={modalshow} primary>Use This Template</Button>;

    const [checked, setChecked] = useState(true);
    const checkboxChange = useCallback((newChecked) => setChecked(newChecked), 
    [],
    dispatch(
        ratingAdd({        
            checked          
        })
      )
    );
    // console.log(checked);
    
    const [value, setValue] = useState('multiple');
   
    
    // const handleChange = useCallback(
    //     (_checked, newValue) => setValue(newValue),
    // [],
    // );
    
  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
    dispatch(
      styleAdd({        
        value          
      })
    ) 
  );
  console.log(value);
  

//   const onSavePostClicked = () => {
//     if (value) {
//       dispatch(
//         styleAdd({        
//           value          
//         })
//       )     
//     }
//   }
   // console.log(store); 
    return (
        <> 
            <Provider store={store}> 
                <Link href="/" >
                    <Button>Go Back</Button>
                </Link>
          
                <Page>               
                    <Heading>Select Template</Heading>
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
                    
                    <div style={{height: '500px'}}>
                        <Modal
                            activator={activator}
                            open={active}
                            onClose={modalshow}
                            title="Enable Rating Action"
                            
                            // primaryAction={{
                            // content: 'Add Instagram',
                            // onAction: modalshow,
                            // }}
                            // secondaryActions={[
                            // {
                            //     content: 'Learn more',
                            //     onAction: modalshow,
                            // },
                            // ]}
                        >
                            <Modal.Section>
                            <TextContainer>
                                <p>
                                Do You Want to Show Star Rating Option in this template 
                                <br />
                                {/* <RadioButton
                                label="Yes" 
                                name="rating"
                                checked={rating === 'yes'}
                                id="rowrating"
                                onChange={onChangeenablerating}
                               
                            />
                            <RadioButton
                                label="No" 
                                name="rating"
                                checked={rating === 'no'}
                                id="rowrating"
                                onChange={onChangeenablerating}
                               
                            /> */}
                            <br />
                            <Checkbox
                                label="Enable/Disable Star Rating"
                                checked={checked}
                                onChange={checkboxChange}
                            />
                                </p>

                                <Link href="/Content/Content" >
                                    <Button primary  >Save & Next</Button>
                                </Link>
                            </TextContainer>
                            </Modal.Section>
                        </Modal>
                    </div> 
                </Page>
            </Provider>
        </>
    ); 
};
export default Content;
import React, {useCallback, useState} from 'react';
import {Stack, RadioButton , Button} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import Sibling1 from './Sibling1.js';
import { styleAdd } from './redux/styleslice.js';




function Styleconfig() {
  const [value, setValue] = useState('multiple');
  //console.log(value);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
    dispatch(
      styleAdd({        
        value          
      })
    ) 
    
    
  );
  
  return (
    <>
    <Stack vertical>
      <RadioButton
        label="Multiple Crousel"        
        checked={value === 'multiple'}
        id="multiple"        
        name="template"
        onChange={handleChange}
      />
      {/* <h1> <Sibling1 /></h1> */}
      <RadioButton
        label="Single Crouser" 
        name="template"
        checked={value === 'single'}
        id="single"
        onChange={handleChange}
      />
      <RadioButton
        label="Grid" 
        name="template"
        checked={value === 'grid'}
        id="grid"
        onChange={handleChange}
      />
      <RadioButton
        label="List Style" 
        name="template"
        checked={value === 'list'}
        id="list"
        onChange={handleChange}
      />
      <RadioButton
        label="Row Wise show" 
        name="template"
        checked={value === 'row'}
        id="row"
        onChange={handleChange}
      />
      
    </Stack>
    {/* <Button primary onClick={onSavePostClicked} >Use This Template</Button> */}
    </>
  );
}


export default Styleconfig;

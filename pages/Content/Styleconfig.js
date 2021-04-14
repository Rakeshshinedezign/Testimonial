import React, {useCallback, useState} from 'react';
import {Stack, RadioButton , Button , ColorPicker , Heading ,TextField} from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import Sibling1 from './Sibling1.js';
import { styleAdd } from './redux/styleslice.js';
import { cssData } from './redux/cssSlice.js';





function Styleconfig() {
  const dispatch = useDispatch();
    

  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
console.log(color);
  const handleChange = useCallback(setColor, []);

  const usecolor = ()=> {
    console.log('click on button');
    dispatch(
      cssData({        
        color          
      })
    )    
  }
  //const [colorvalue, setcolorValue] = useState('red');
  //const setColorData = useCallback((newValue) => setcolorValue(newValue), [],  );
  //console.log(colorvalue);


  const [value, setValue] = useState('10');  
  const setData = useCallback((newValue) => setValue(newValue), [],
  dispatch(
    cssData({        
      value          
    })
  )
  );
  console.log(value);


 
  return (
    <>
      
    <Heading>Select Stars Color</Heading>
    <ColorPicker onChange={handleChange} color={color} />
    {/* <p>Style component</p> */}
    <Button onClick={usecolor}>Save Color</Button>


    <TextField label="Store name" value={value} onChange={setData} />
    {/* <input type="color" value={colorvalue} onChange={setColorData}/> */}

    <div className="test" style=
      {{padding: "20px",
      backgroundColor:`hsl(${color.hue},${color.saturation}%,${color.brightness}%)`}}>
      Test Data Text
    </div>
   
    
    </>
  );
}


export default Styleconfig;

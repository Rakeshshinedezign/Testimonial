
import React, {useCallback, useState} from 'react';
import {Stack, RadioButton ,Button, TextField, Form, FormLayout , Page , Heading , Caption, DropZone, Thumbnail , DatePicker , Checkbox} from '@shopify/polaris';
import {NoteMinor} from '@shopify/polaris-icons';


import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { formAdd } from './Content/redux/formSlice';

const Star = ({ starId, marked }) => {
  return (
    <span
      star-id={starId}
      role="button"
      style={{ color: "#ff9933", cursor: "pointer" }}
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};



 function Testimonialcontentform() {
  //const [selectedStars, setSelectedStars] = useState(0);
  const [heading, setHeading] = useState(''); 
  // const [date, setdate] = useState('');
  const [checked, setChecked] = useState(false);
  const checkboxChange = useCallback((newChecked) => setChecked(newChecked), []);



  const [description, setDescription] = useState(''); 
  const [starRating, setstarRating] = useState('');
  const [name, setName] = useState(''); 

  const [selection, setSelection] = useState(0);

  // Manages rating selection
  const [rating, setRating] = useState(0);

  const hoverOver = event => {
    let starId = 0;
    if (event && event.target && event.target.getAttribute("star-id")) {
      starId = event.target.getAttribute("star-id");
    }
    setSelection(starId);
  };
  

  /// Image Upload Start Here
const [file, setFile] = useState();

const handleDropZoneDrop = useCallback(
  (_dropFiles, acceptedFiles, _rejectedFiles) =>
    setFile((file) => acceptedFiles[0]),
  [],
);

const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

const fileUpload = !file && <DropZone.FileUpload />;
const uploadedFile = file && (
  <Stack>
    <Thumbnail
      
      alt={file.name}
      source={
        validImageTypes.includes(file.type)
          ? window.URL.createObjectURL(file)
          : NoteMinor
      }
    />
    
  </Stack>
);
/// Image Upload End here 
const [{month, year}, setDate] = useState({month: 1, year: 2018});
  const [selectedDates, setSelectedDates] = useState({
    start: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
    end: new Date('Wed Feb 07 2018 00:00:00 GMT-0500 (EST)'),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({month, year}),
    [],
  );
 
  //const headingChange = useCallback((value) => setHeading(value), []);
  const onheadingChanged = useCallback((value) => setHeading(value), []);  
  // const ondateChanged = useCallback((value) => setdate(value), []); 
  const descriptionChange = useCallback((value) => setDescription(value), []);
  const NameChange = useCallback((value) => setName(value), []);
  const dispatch = useDispatch()

  const adddata = () => {    
    console.log('form submit')
    if (rating && heading && description && name && uploadedFile) {
      dispatch(
        formAdd({
          id: nanoid(),
          rating ,
          heading,
          description ,
          name ,
          uploadedFile
        })
      )
      setSelection('')
      setHeading('')
      setDescription('')
      setName('')
    }
  }


 
  return (
    <>
    {/* <Header /> */}
   
      {/* <Button primary>Back</Button> */}
      {month, year}
       
    <Page>
    
      <Form >
        <FormLayout>
          {/* {rating}  {uploadedFile} */}

          {checked}
          
          <Checkbox
            label="Enable Star Rating"
            checked={checked}
            onChange={checkboxChange}
          />
          <Heading>Star Rating</Heading>
        <div
      onMouseOver={hoverOver}
      onMouseOut={() => hoverOver(null)}
      onClick={event => setRating(event.target.getAttribute("star-id"))}
       className="star">
      {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={selection ? selection > i : rating > i} />
      ))}
    </div>
        
          <TextField type="text" value={heading} onChange={onheadingChanged} label=" Heading"  />

          <TextField value={description} onChange={descriptionChange} label="  Description "  multiline={4}/>

          <TextField value={name} onChange={NameChange} label=" Name"  />
          <DropZone allowMultiple={false} onDrop={handleDropZoneDrop}>
            {uploadedFile}
            {fileUpload}
          </DropZone>
          {/* <input type="date" name="date" value={date} onChange={ondateChanged}/> */}
          <DatePicker
            month={month}
            year={year}
            onChange={setSelectedDates}
            onMonthChange={handleMonthChange}
            selected={selectedDates}
          />
          
          <Button onClick={adddata}>Submit</Button>
        </FormLayout>
      </Form>
      </Page>
    </>
  );
}





export default Testimonialcontentform;

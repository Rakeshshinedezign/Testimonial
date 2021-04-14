import React ,{ useState } from 'react';
import { useSelector } from 'react-redux'
import {Heading , Checkbox , Button} from '@shopify/polaris';
//import Link from 'next/link';
import { Link } from 'react-router-dom'
//import { DatePicker, RangeDatePicker } from "@y0c/react-datepicker";
//import {Route, Switch , Router} from "react-router-dom";

const Star = ({ starId, marked }) => {
  return (
    <span star-id={starId} role="button" style={{ color: "#ff9933", cursor: "pointer" }} >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};
const Formoutput = () => {

  const css = useSelector(state => state.css.slice(-1));
  console.log(css);
  // let fontsize = css[0];
  // console.log(fontsize.value);
  //  let Uifontsize = fontsize.value;
  //  console.log(Uifontsize);

  let dropzoneStyle = {
    color: `red`,    
  };
  const [selection, setSelection] = useState(0);
  const form = useSelector(state => state.form)
  console.log(form);
  const renderedform = form.map(post => (
    <>
      <div className="main" key={post.id}>
        {
          (() => 
              {
                if (post.rating != '0') 
                
                  return (
                    <div className="star-rating"> 
                        {Array.from({ length: 5 }, (v, i) => (
                          <Star starId={i + 1} marked={selection ? selection > i : post.rating > i} />
                        ))}
                    </div> 
                  )
              }
          )()
        }                     
          <div className="title"> 
            {/* <b style= {{fontSize: Uifontsize +'px' }}>    {post.heading} {Uifontsize}</b> */}
            <b >    {post.heading}</b>
          </div>
          <div className="content">
            <p style={dropzoneStyle}>{post.description}</p>
          </div>
          <div className="image-date">
            <div className="image">
              {post.uploadedFile}          
            </div>
            <div className="name-date">
            {post.name} {post.id}<br />form
              Date
            </div>
          </div>
      </div>
      {/* <Router>
        <Link  to={`/form/${post.id}`} >
          View Post
        </Link>
      </Router> */}
        
      
    </>
  )
  )
  return (
    <section className="form-list">    
      {renderedform}
    </section>
  )
}

export default Formoutput;
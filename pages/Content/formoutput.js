import React ,{ useState } from 'react';

import { useSelector } from 'react-redux'
import {Heading} from '@shopify/polaris';
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
 const Formoutput = () => {
  const [selection, setSelection] = useState(0);

  const form = useSelector(state => state.form)

  const renderedform = form.map(post => (
      <>
    {/* <article className="post-excerpt" key={post.id}>
      <h3>{post.heading}</h3>
      <p className="post-content">{post.description.substring(0, 100)}</p>
      {post.name}
    </article> */}
    <div className="main">
          <div className="star-rating">
            {/* <h1>*****</h1> */}
            {Array.from({ length: 5 }, (v, i) => (
        <Star starId={i + 1} marked={selection ? selection > i : post.rating > i} />
      ))}
            
            
          </div>
          
        <div className="title">
         
          <Heading>{post.heading}</Heading>
        </div>
        <div className="content">
          <p>{post.description}</p>
        </div>
        <div>
          <div className="image">
            {post.uploadedFile}          
          </div>
          <div className="name-date">
          {post.name} <br />
            Date
          </div>
        </div>
      </div>
    </>
  ))

  return (
    <section className="form-list">
      
      {renderedform}
    </section>
  )
}

export default Formoutput;
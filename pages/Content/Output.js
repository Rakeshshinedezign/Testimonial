// import React, { useCallback } from 'react';
// import { useSelector } from 'react-redux';

// function Output()  {
//     return(
//         <>
         
//           <p>Desktop Icon</p><p>Mobile icon</p>
//         </>
//     );
// }
// export default Output;

import React from 'react';
import { useSelector } from 'react-redux';
import {Heading} from '@shopify/polaris';
import Formoutput from './formoutput.js';
import { Provider } from "react-redux";
import store from './redux/store.js';




const PostsList = () => {
  const style = useSelector(state => state.style.slice(-1))
  //const style = useSelector(state => state.style)
  //const style = useSelector(state => state.style[style.length - 1])

  console.log(style);
  

  const renderedPosts = style.map(style => ( 
    <article className="post-excerpt" >
      <h3>{style.value}</h3>  
    </article>
  ))
  
  let data = style[0];
  console.log(data.value);
  let selected_template = data.value;
  console.log(selected_template);

  // return (
  //   <section className="posts-list">
  //     <h2>Posts</h2>
  //     {/* {style} */}
  //      {renderedPosts}
  //   </section>
  // )

  if(selected_template == 'multiple'){
    return(
      <>
      <div className={selected_template}>
       Multiple crouser Template will show here
        <Provider store={store}>
          <Formoutput />
        </Provider>
       
      </div>
        
          
      </>
    )
  }
  else if(selected_template == 'single'){
    return (
      <>
        <div className={selected_template}>
        Single crouser Template will show here
        </div>
        <div className="main">
          <div className="star-rating">
            <h1>*****</h1>
          </div>
        <div className="title">
         
          <Heading>Title</Heading>
        </div>
        <div className="content">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div>
          <div className="image">
          <img src="https://cdn.shopify.com/s/files/1/0540/6955/9467/t/1/assets/multiple.png?v=1617777079"  height="50px" width="50px"/>
          </div>
          <div className="name-date">
            Name <br />
            Date
          </div>
        </div>
      </div>
    </>
    )
  }
  else if(selected_template == 'grid'){
    return (
      <div className={selected_template}>
        Grid  Template will show here
      </div>
    )
  }
  else if(selected_template == 'list'){
    return (
      <div className={selected_template}>
      List Template will show here
      </div>
    )
  }
  else if(selected_template == 'row'){
    return (
      <div className={selected_template}>
        Row Template will show here
      </div>
    )
  }else {
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {/* {style} */}
       {renderedPosts}
    </section>
  )
}
}
export default PostsList;

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

  // const css = useSelector(state => state.css.slice(-1));
  // console.log(css);
  // let fontsize = css[0];
  // //console.log(fontsize.value);
  //  let Uifontsize = fontsize.value;
  //  console.log(Uifontsize);
  // console.log('line 24')

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
       {/* {Uifontsize} */}
      
       
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
        <Provider store={store}>
          <Formoutput />
        </Provider>
        </>
    )
  }
  else if(selected_template == 'grid'){
    return (
      <div className={selected_template}>
        Grid  Template will show here
        <Provider store={store}>
          <Formoutput />
        </Provider>
      </div>
    )
  }
  else if(selected_template == 'list'){
    return (
      <div className={selected_template}>
      List Template will show here
      <Provider store={store}>
          <Formoutput />
        </Provider>
      </div>
    )
  }
  else if(selected_template == 'row'){
    return (
      <div className={selected_template}>
        Row Template will show here
        <Provider store={store}>
          <Formoutput />
        </Provider>
      </div>
    )
  }else {
  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {/* {style} */}
      {css}
       {renderedPosts}
    </section>
  )
}
}
export default PostsList;

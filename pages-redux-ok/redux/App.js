import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

//import { Navbar } from './app/Navbar'

import { PostsList } from './PostsList';
import { AddPostForm } from './AddPostForm';

function App() {
  return (
    // <Router>
    //   {/* <Navbar /> */}
    //   <div className="App">
    //     <Switch>
    //       <Route
    //         exact
    //         path="/"
    //         render={() => (
    //           <React.Fragment>
               
    //           </React.Fragment>
    //         )}
    //       />
    //       <Redirect to="/" />
    //     </Switch>
    //   </div>
    // </Router>
    <>
    <PostsList />
    <AddPostForm />
    </>
  )
}

export default App
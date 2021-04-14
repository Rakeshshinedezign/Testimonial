import {Card, DataTable, Page} from '@shopify/polaris';
import React, {useCallback, useState} from 'react';
import Link from 'next/link';
import {Button} from '@shopify/polaris';
import Testimonialcontentform from './Testimonialcontentform.js';
import { Provider } from "react-redux";
import store from './Content/redux/store.js';
import CreateNew from './CreateNewSet.js';
import Content from './Content/SelectTemplate';


// function CreateNew()  {
//   return(
//       <>  
//         <Provider store={store}>
//           <Link href="/Content/SelectTemplate"> 
//               <Button primary>Create New Set</Button>
//           </Link>
//         </Provider>      
        
//       </>
//   );
// }

export default function TableData() {
  //console.log(store);

  const [create, setCreate] = useState('1');
  // const createnewset = () => {
  //   console.log(create);
  //   console.log('create new set');
  //   setCreate =
  // }

  const createnewset = ()  => setCreate('2');
  console.log(create);

  const rows = [
    ['1', 'One Testimonial', 'source code', 'Edit', 'Delete'],
    ['2', 'Second Testimonial', 'source code', 'Edit', 'Delete'],
    ['3','Third Testimonial', 'source code', 'Edit', 'Delete',],
  ];

  return ( 
        <> 
          {
            (() => {
                if (create == '1') 
                    return (
                      <div className="">                            
                         <Provider store={store}>
            {/* <Link href="/Content/SelectTemplate"> 
                <Button primary>Create New Set</Button>
            </Link>           */}
              <Button primary onClick={createnewset}>Create New Set</Button>
            
             {/* <CreateNew /> */}
          </Provider>  
           
            <Card>            
              <DataTable
                columnContentTypes={[
                  
                  'text',
                  'numeric',
                  'numeric',
                  'numeric',
                  'numeric',
                ]}
                headings={[
                  'S. No',
                  'Title',
                  'Source Code',
                  'Edit',
                  'Delete',
                ]}
                rows={rows}              
                footerContent={`Showing ${rows.length} of ${rows.length} results`}
              />
            </Card>
                      </div> 
                    )
                    if (create == '2') 
                    return (
                      <div >  
                        <Provider store={store}>
                            <Content />   
                        </Provider>                     
                          
                      </div> 
                    )
              }              
            )()
          }
          
           
          
                   
        </>
    
  );
}

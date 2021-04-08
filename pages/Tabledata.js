import React from 'react';
import {Card, DataTable, Page} from '@shopify/polaris';
import Link from 'next/link';
import {Button} from '@shopify/polaris';
import Testimonialcontentform from './Testimonialcontentform.js';
import store from './Content/redux/store.js';
import { Provider } from "react-redux";

export default function TableData() {
  const rows = [
    ['1', 'One Testimonial', 'source code', 'Edit', 'Delete'],
    ['2', 'Second Testimonial', 'source code', 'Edit', 'Delete'],
    ['3','Third Testimonial', 'source code', 'Edit', 'Delete',],
  ];

  return ( 
        <> 
        <Provider store={store}>
        <Link href="/Content/SelectTemplate"> 
            <Button primary>Create New Set</Button>
        </Link>
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
      </>
    
  );
}

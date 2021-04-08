import React, {useCallback, useState} from 'react';
import { Stack, Card, TextContainer, Collapsible } from '@shopify/polaris';
import {Button} from '@shopify/polaris';
import Testimonialcontentform from '../Testimonialcontentform.js';
import Header from '../Header.js';
import Link from 'next/link';
import Leftontent from './Leftontent.js';


export default function CollapsForm() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState('show');

  const handleToggle = useCallback(() => setOpen((open) => !open), []);


  function showform(text) {
    console.log('ok');    
    console.log(show);
  }

  return (
    <div >
      <Card sectioned>         
          <Link href="Leftontent">
            <Button primary> Click to Show Content Form</Button>
          </Link>                
      </Card>
    </div>
  );
}

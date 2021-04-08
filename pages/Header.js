import Link from 'next/link';
import {Button} from '@shopify/polaris';
import Template from './Template.js';
import Dashboard from './Dashboard.js';


function Header() {
  return (
    <>  
       
        <Link href="/Dashboard" >
          <Button>Dashboard</Button>
        </Link>
        <Link href="/Template" >
          <Button>Template</Button>
        </Link>
        <Link href="/Content/Content" >
          <Button>Setting</Button>
        </Link>
        <Link href="/Testimonialcontentform" >
          <Button>Instruction Care</Button>
        </Link>
        {/* <Link href="/About" className="create" >
          <Button primary>Create New Testimonial</Button>
        </Link> */}
    </>
  )
}

export default Header;
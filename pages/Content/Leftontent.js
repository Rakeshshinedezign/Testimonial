import React ,{useCallback, useState} from "react";
import Link from 'next/link'; 
import Header from '../Header.js';
import {Button} from '@shopify/polaris';
import { Heading, Page } from "@shopify/polaris";
import {TextStyle, Card, Layout, ResourceList, Thumbnail , Tabs} from '@shopify/polaris';
import {Navigation} from '@shopify/polaris';
import {HomeMajor, OrdersMajor, ProductsMajor} from '@shopify/polaris-icons';
import TestimonialTabs from './TestimonialTabs.js';
import Output from "./Output.js";
import Testimonialcontentform from '../Testimonialcontentform.js';
//import Sibling1 from './Sibling1.js';
//import Sibling2 from './Sibling2.js';

function Leftontent() {
    return (
        <>  
            <Link href="Content" >
                <Button >Go Back</Button>
            </Link>
            <Layout>
                <Layout.Section oneHalf>
                    {/* Here i Have added Tabs  */}
                   <Testimonialcontentform />
                    {/* Here i Have added Tabs  */}
                   
                </Layout.Section>
                <Layout.Section oneHalf>
                    <Card>
                         <Output />                    
                    </Card>
                </Layout.Section>
            </Layout>            
        </>
    ); 
};
export default Leftontent;

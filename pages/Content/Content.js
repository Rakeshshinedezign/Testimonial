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

import store from './redux/store.js';
import { Provider } from "react-redux";
import PostsList from './Output.js';



function Content() {

    return (
        <>  
            <Link href="/" >
                <Button>Go Back</Button>
            </Link>
            <Layout>
                <Layout.Section oneHalf>
                    {/* Here i Have added Tabs  */}
                   <TestimonialTabs />
                    {/* Here i Have added Tabs  */}
                   
                </Layout.Section>
                <Layout.Section oneHalf>
                    <Card>
                    <Provider store={store}>
                        <PostsList />
                    </Provider>
                       
                       
                    </Card>
                </Layout.Section>
            </Layout>
            
        </>
    ); 
};
export default Content;




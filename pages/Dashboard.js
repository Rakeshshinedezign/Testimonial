import React from "react";
import Link from 'next/link';
import Header from './Header.js' ;
import {Button} from '@shopify/polaris';
import { Heading, Page } from "@shopify/polaris"; 
import TableData from './Tabledata.js';
import {Navigation} from '@shopify/polaris';
import {HomeMajor, OrdersMajor, ProductsMajor} from '@shopify/polaris-icons';
//import store from './Content/redux/store.js';
import store from './Content/redux/store'
import { Provider } from "react-redux";


function Dashboard() {
    return (
        <>
            <Header />
            <Page>
                <Provider store={store}>
                    <TableData />
                </Provider>
            </Page> 
        </>
    );
};
export default Dashboard;

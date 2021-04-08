import React from "react";
import Link from 'next/link';
import Header from './Header.js' 
import { Heading, Page } from "@shopify/polaris"; 

function Template() {
    return (
        <>
        <Header />
             <Page>
            <h1>Hello Its Template  Page</h1>
            <h2>Here we will Show Templates which will be used for Testimonial</h2>
            </Page>
        </>
    );
};
export default Template;

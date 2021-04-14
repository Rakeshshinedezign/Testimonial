import React from 'react';
import Link from 'next/link';
import {Button} from '@shopify/polaris';

function CreateNew()  {
    return(
        <>           
            <Link href="/Content/SelectTemplate"> 
                <Button primary>Create New Set</Button>
            </Link>
        </>
    );
}
export default CreateNew;
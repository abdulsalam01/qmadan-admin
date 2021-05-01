import Head from 'next/head';
import { AppComponent } from 'next/dist/next-server/lib/router/router';
import React from 'react';

interface iMeta {
    title: string,
    description: string
}

const Header = (meta: iMeta) => {
    return (
        <React.Fragment>
        <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='alert alert-danger'>
            hello
        </div>
        </React.Fragment>
    );
}

export default Header;
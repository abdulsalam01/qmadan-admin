import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
// link
import 'bootstrap/dist/css/bootstrap.min.css';

interface iMeta {
    title: string,
    description: string
}

interface iMenu {
    label: string,
    link: string
}

const Header = (meta: iMeta) => {
    const appName: string = "Qismi Admin";
    const menus: iMenu[] = [
        {label: 'Home', link: '/'}, 
        {label: 'Category', link: '/category'}, 
        {label: 'Story', link: '/story'},
        {label: 'Feedback', link: '/feedback'}
    ];

    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand m-2" href="#">{appName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">
                        {menus.map((n: iMenu, index: number) => (
                            <li className="nav-item" key={index}>
                                <Link href={n.link}>
                                    <span className="nav-link" role="button">{n.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            
            {/* divider */}
            <div className="mb-5"></div>
        </React.Fragment>
    );
}

export default Header;
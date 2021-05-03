import Head from 'next/head';
import React from 'react';

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
        {label: 'Home (Category)', link: '#'}, 
        {label: 'Story', link: '#'},
        {label: 'Feedback', link: '#'}
    ];

    return (
        <React.Fragment>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{appName}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        {menus.map((n: iMenu) => (
                            <li className="nav-item active">
                                <a className="nav-link" href={n.link}>{n.label}</a>
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
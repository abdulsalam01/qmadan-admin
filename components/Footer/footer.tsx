import React from "react";
import style from './style.module.scss';

const Footer = () => {
    const footerName = "Qismi App | 2021";

    return (
        <React.Fragment>
            <div className={style.footer}>
                <footer className="navbar navbar-expand-md bg-dark">
                    <a href="#">{footerName}</a>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default Footer;
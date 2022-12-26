import React from 'react';
import {footerLinksArr} from '../../data/content';
import './footer.scss';

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer-inner-container">
                <div className="left-links footer-decor">
                    <ul>
                        {footerLinksArr.map((link, i) => {
                            return (
                                <li key={i}>
                                    <a href={link.link} className={`link-block ${link.name}`} target='_blank'></a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="right-links footer-decor">
                    <a href="mailto:olha.rybchynska@gmail.com">olha.rybchynska@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
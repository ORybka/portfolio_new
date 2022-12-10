import React, {useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import './front-page.scss';

function FrontPage() {
    const location = useLocation();
    const [mobile, setMobile] = useState(false);
    const [hoverId, setHoverId] = useState('');
    const [showLink, setShowLink] = useState(false);

    useEffect(() => {
        window.innerWidth > 767 ? setMobile(true) : setMobile(false);
    }, [location]);

    const onMouseEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
        const elementId = (e.target as HTMLSpanElement).closest('.link-item')!.id;
        setHoverId(elementId);
    }

    const leaveElement = () => {
        setHoverId('');
    }

    const onTouchStart = () => {
        setTimeout(() => setShowLink(!showLink), 400)
    }

    return (
        <div onTouchStart={onTouchStart} className='front-page-container'>
            {window.innerWidth <= 1024 && !showLink ? <div className="mobile-tap">Tap Anywhere</div> : null}
            <div className="front-page-inner-container">
                <div className="left-block">
                    <h1 className='main-title'>
                        <span onMouseEnter={mobile ? onMouseEnter : undefined}
                              onMouseLeave={mobile ? leaveElement : undefined} id='about-link'
                              className='link-item'>
                            {hoverId === 'about-link' || showLink ? <Link to='/home/'>About</Link> : 'Hello'}
                        </span>
                        <span onMouseEnter={mobile ? onMouseEnter : undefined}
                              onMouseLeave={mobile ? leaveElement : undefined} id='projects-link'
                              className='link-item'>
                            {hoverId === 'projects-link' || showLink ? (
                                <Link to={{pathname: "/home/", hash: "#projects"}}>Projects</Link>
                            ) : 'My name is'}
                        </span>
                        <span onMouseEnter={mobile ? onMouseEnter : undefined}
                              onMouseLeave={mobile ? leaveElement : undefined} id='contact-link'
                              className='link-item name'>
                            {hoverId === 'contact-link' || showLink ? (
                                <Link to={{pathname: "/home/", hash: "#contact"}}>Contact</Link>
                            ) : 'Olha'}
                        </span>
                    </h1>
                </div>
                <div className="right-block">
                    {
                        mobile ? (
                            <Link to='/home/'>
                                <img src="/assets/images/profile.png" alt="Olha Rybchynska"/>
                            </Link>
                        ) : <img src="/assets/images/profile.png" alt="Olha Rybchynska"/>
                    }
                </div>
            </div>
        </div>
    );
}

export default FrontPage;

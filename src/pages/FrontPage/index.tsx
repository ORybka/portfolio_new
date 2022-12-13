import React, {useState,useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import {frontPageArr} from '../../data/content'
import './front-page.scss';

function FrontPage() {
    const location = useLocation();
    const [mobile, setMobile] = useState<boolean>(false);
    const [hoverId, setHoverId] = useState<string>('');
    const [showLink, setShowLink] = useState<boolean>(false);

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
        setTimeout(() => setShowLink(!showLink), 300)
    }

    return (
        <div onTouchStart={onTouchStart} className='front-page-container'>
            {window.innerWidth <= 1024 && !showLink ? <div className="mobile-tap">Tap Anywhere</div> : null}
            <div className="front-page-inner-container">
                <div className="left-block">
                    <h1 className='main-title'>
                        {frontPageArr.map(el => {
                            return (
                                <span onMouseEnter={mobile ? onMouseEnter : undefined}
                                  onMouseLeave={mobile ? leaveElement : undefined} id={el.id}
                                  className={`link-item${el.additionalClassName}`} key={el.id}>
                                    {hoverId === el.id || showLink ? (
                                        <Link to={{pathname: "/home/", hash: `#${el.hash}`}}>{el.hoveredText}</Link>
                                    ) : el.text}
                                </span>
                            )
                        })}
                    </h1>
                </div>
                <div className="right-block">
                    {
                        mobile ? (
                            <Link to='/home/'>
                                <img src={`${process.env.PUBLIC_URL}/assets/images/profile.webp`} alt="Olha Rybchynska"/>
                            </Link>
                        ) : <img src={`${process.env.PUBLIC_URL}/assets/images/profile.webp`} alt="Olha Rybchynska"/>
                    }
                </div>
            </div>
        </div>
    );
}

export default FrontPage;

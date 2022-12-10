import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import CurrentExperience from "../../components/CurrentExperience";
import './main-page.scss';

function MainPage() {
    const location = useLocation();

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
            window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location])

    return (
        <div className='main-page-container'>
            <div className="main-page-inner-block">
                <CurrentExperience />
            </div>
            <div className="main-page-inner-block" id="projects">
                <h1 className='main-title'>Projects</h1>
            </div>
            <div className="main-page-inner-block" id="contact">
                <h1 className='main-title'>Contact</h1>
            </div>
        </div>
    );
}

export default MainPage;
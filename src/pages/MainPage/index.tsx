import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import CurrentExperience from "../../components/CurrentExperience";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import './main-page.scss';

function MainPage() {
    const location = useLocation();

    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        }
        // else {
        //     window.scrollTo({top:0,left:0, behavior: "smooth"})
        // }
    }, [location])

    return (
        <div className='main-page-container'>
            <CurrentExperience />
            <Projects />
            <Contact />
        </div>
    );
}

export default MainPage;
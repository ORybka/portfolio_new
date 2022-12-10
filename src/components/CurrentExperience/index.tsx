import React from 'react';
import ExperienceBlock from "../about/ExperienceBlock";
import './current-experience.scss';

function CurrentExperience() {
    return (
        <div className='current-page-container'>
            <h4 className='title'>About</h4>
            <div className="current-page">
                About {'>'} <span>Current Experience</span>
            </div>
            <div className="main-content">
                <p>I am a Frontend developer with 2 years of experience in developing and maintaining websites.<br />
                Two years ago I felt myself on the top of the world because I was lucky enough to find my dream job.<br />
                Since than I am working and living as a Frontend developer and still too overwhelmed about it :)</p>
            </div>
            <ExperienceBlock id={'bulls'} />
        </div>
    );
}

export default CurrentExperience;
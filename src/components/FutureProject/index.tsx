import React from 'react';

function FutureProject() {
    return (
        <div className='project-item'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/tba.webp`} alt='project TBA' />
            <ul>
                <li>I am sure I am working on this kind of project right now ;) </li>
            </ul>
        </div>
    );
}

export default FutureProject;
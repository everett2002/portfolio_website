import React from 'react'

const projectentry = () => {
    return (
        <div className='project-entry'>
            <h3>Portfolio Website</h3>
            <p>January 2023</p>
            <ul>
                <li>
                    The website you're looking at right now!
                </li>
                <li>
                    Used to showcase my projects while also displaying some of my frontend skills
                </li>
            </ul>

            <container className="skills-container">
                <div className="skill">React.js</div>
                <div className="skill">HTML</div>
                <div className="skill">CSS</div>
            </container>
        </div>
    )
}

export default projectentry
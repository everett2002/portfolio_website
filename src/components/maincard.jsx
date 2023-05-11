import React from 'react'

const maincard = () => {
    return (
        <div className='maincard'>

            <h1 className='main-title'>Everett Ho</h1>

            <div className='maincard-options'>
                <a href="https://www.linkedin.com/in/everett-ho-ab97b219b/" className='maincard-link'><i class="fa-brands fa-linkedin fa-2x"></i></a>
                <a href="mailto:everettho2002@gmail.com" className='maincard-link'><i class="fa-solid fa-envelope fa-2x"></i></a>
                <a href="https://youtube.com/@everettho7467" className='maincard-link'><i class="fa-brands fa-youtube fa-2x"></i></a>
                <a href="https://github.com/everett2002?tab=repositories" className='maincard-link'><i class="fa-brands fa-github fa-2x"></i></a>
            </div>
        </div>
    )
}

export default maincard

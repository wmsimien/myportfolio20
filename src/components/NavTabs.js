import React from 'react'

const NavTabs = ( {currentPage, handlePageChange }) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home" onClick={() => handlePageChange('Home')}
                   className={currentPage === 'Home' ? 'nave-link active' : 'nav-link'} >
                    Home
                </a>
            </li>
            <li>
                <a href="#about" onClick={() => handlePageChange('About')}
                   className={currentPage === 'About' ? 'nave-link active' : 'nav-link'} >
                    About Me
                </a>
            </li>
            <li>
                <a href="#contact" onClick={() => handlePageChange('Contact')} 
                   className={currentPage === 'Contact' ? 'nave-link active' : 'nav-link'} >
                    Contact Me
                </a>
            </li>
            <li>
                <a href="#resume" onClick={() => handlePageChange('Resume')} 
                   className={currentPage === 'Resume' ? 'nave-link active' : 'nav-link'} >
                    Resume
                </a>
            </li>
            <li> 
                <a href="#work" onClick={() => handlePageChange('Work')} 
                   className={currentPage === 'Work' ? 'nave-link active' : 'nav-link'} >
                    Portfolio
                </a>
            </li>
        </ul>
    )
}

export default NavTabs

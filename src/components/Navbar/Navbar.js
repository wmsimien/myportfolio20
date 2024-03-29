import React, { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi';
import '../Navbar/Navbar.css';

const Navbar = ({ navbarLinks, handlePageChange }) => {

    // Used to know when nav link is clicked; default will be fasle
    const [ menuClick, setMenuClick ] = useState(false);

    // Used to set the state of the menu link clicked
    const toggleMenuClick = () => {
        setMenuClick(!menuClick);
    };
    // const closeMobileMenu = () => setMenuClick(false);
    return (
        <nav className="navbar">
            {menuClick ? (<FiMenu size={35} className="navbar_menu" 
                onClick={toggleMenuClick} />) : (<FiX size={35} className="navbar_menu" 
                onClick={toggleMenuClick} />
            )}
            <ul className={menuClick ? "navbar_list" : "navbar_list navbar_list--active"}>
                {navbarLinks.map((navbarLink) => {
                    return (
                        <li className="navbar_item" key={navbarLink.title}>
                            <a className="navbar_link" href={navbarLink.url} 
                                onClick={() => handlePageChange(navbarLink.title)}>
                                {navbarLink.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar

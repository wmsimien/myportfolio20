import React from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Work from './Work';
import { useState } from 'react';
import NavTabs from './NavTabs';

const PortfolioContainer = () => {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage){
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            case 'Work':
                return <Work />;
            default:
                break;
        }
    }
    // function to handle the navigating of pages
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <section>
            <NavTabs 
                currentPage={currentPage} 
                handlePageChange={handlePageChange} />
            {renderPage()}
        </section>
    )
}

export default PortfolioContainer

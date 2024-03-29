import React, { useState } from 'react'
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import Resume from '../Resume/Resume.js';
import Project from '../Portfolio/Project.js';
import Home from '../Home/Home.js';
import Hero from '../Hero/Hero';
import hero from '../../assets/hero.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer.js';
import self from '../../assets/self.jpg';
import nature from '../../assets/Grounded.jpg';
import climate from '../../assets/climatedb.jpg';
import planner from '../../assets/dayplanner.jpg';
import dmiss from '../../assets/dontmiss.jpg';


const Header = () => {

    const [currentPage, setCurrentPage] = useState('Home');
   
    // array of empowering learning quotes
    const learningQuotes = [
        { quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', 
          author:'― Mahatma Gandhi'
        },
        { quote: 'Smooth seas do not make skillful sailors.', 
          author:'― African Proverb'
        },
        { quote: 'Tell me and I forget, teach me and I may remember, involve me and I learn.', 
          author:'― Benjamin Franklin'
        },
    ];
    
    //  array of works/projects
    const projects = [
        {
            imageSrc: nature,
            alt: 'Tree of Life',
            title: 'Grounded',
            desc: `Grounded is a browser application giving users the flexible to be 
            'Grounded' in all categories/events/places in life.  Users have the ability to add
            categories/events/places of their choosing to the 'Search Category' dropdown via the 
            'Enter A New Category' section.  When the the 'Add Category' button
            is clicked the new category will be added to local storage and the listing
            for later use via the dropdown.  Users will then enter a US city and state to fulfill the 
            search criteria.  TomTom's fuzzy search is utilized to return the criteria search and
            the address, phone number, and website, if this information is available will be displayed.  
            A 'Map It' button will appear allowing users to view the location of the place/event and 
            a marker will be placed on the map as an indicator.  All possible with TomTom's map object.  
            Enjoy staying 'Grounded' (connected).`, 
            deployedLink: 'https://wmsimien.github.io/grounded/', 
            gitHubLink: 'https://github.com/wmsimien/grounded.git'
        },
        // {
        //     imageSrc: nature,
        //     alt: 'Tree of Life',
        //     title: 'Grounded',
        //     desc: `Grounded is a browser application giving users the flexible to be 
        //     'Grounded' in all categories/events/places in life.  Users have the ability to add
        //     categories/events/places of their choosing to the 'Search Category' dropdown via the 
        //     'Enter A New Category' section.  When the the 'Add Category' button
        //     is clicked the new category will be added to local storage and the listing
        //     for later use via the dropdown.  Users will then enter a US city and state to fulfill the 
        //     search criteria.  TomTom's fuzzy search is utilized to return the criteria search and
        //     the address, phone number, and website, if this information is available will be displayed.  
        //     A 'Map It' button will appear allowing users to view the location of the place/event and 
        //     a marker will be placed on the map as an indicator.  All possible with TomTom's map object.  
        //     Enjoy staying 'Grounded' (connected).`, 
        //     deployedLink: 'https://wmsimien.github.io/grounded/', 
        //     gitHubLink: 'https://github.com/wmsimien/grounded.git'
        // },
        // {
        //     imageSrc: nature,
        //     alt: 'Tree of Life',
        //     title: 'Grounded',
        //     desc: `Grounded is a browser application giving users the flexible to be 
        //     'Grounded' in all categories/events/places in life.  Users have the ability to add
        //     categories/events/places of their choosing to the 'Search Category' dropdown via the 
        //     'Enter A New Category' section.  When the the 'Add Category' button
        //     is clicked the new category will be added to local storage and the listing
        //     for later use via the dropdown.  Users will then enter a US city and state to fulfill the 
        //     search criteria.  TomTom's fuzzy search is utilized to return the criteria search and
        //     the address, phone number, and website, if this information is available will be displayed.  
        //     A 'Map It' button will appear allowing users to view the location of the place/event and 
        //     a marker will be placed on the map as an indicator.  All possible with TomTom's map object.  
        //     Enjoy staying 'Grounded' (connected).`, 
        //     deployedLink: 'https://wmsimien.github.io/grounded/', 
        //     gitHubLink: 'https://github.com/wmsimien/grounded.git'
        // },
        {
            imageSrc: climate,
            alt:'Weather Dashboard',
            title: 'Climate Dashboard',
            desc: `The Weather Dashboard is a browser application which displays the current searched 
            city weather conditions and provides a five-day forecast. The temperature, wind speed, 
            humidity and UV index will be displayed for the current conditions. The UV Index will 
            have a background color based on the following scale:
            0-2 (low): Green 
            3-5 (moderate): Yellow 
            6-7 (high): Orange 
            8-10 (very high): Red 
            11+ (extreme): Dark Violet
        
            An icon will be displayed as a representation of the current and forcast weather conditions. 
            The search history will be stored in local storage allowing users to recall pass searches. 
            Only 8 city searches will be kept and maintained.`, 
            deployedLink: 'https://wmsimien.github.io/climatebd/', 
            gitHubLink: 'https://github.com/wmsimien/climatebd.git'
        },
        {
            imageSrc: planner,
            alt:'Day Planner',
            title: 'Day Planner',
            desc: `This browser application displays the current workday block-hours starting at 7AM and ending 
            at 7PM. The block-hours background will display in grey for past hours, red for current hour,
            and green for future/upcoming hours. Users will be able to enter an event for any specified 
            block-hour and click the save button to the right of the entered event. Thus, their saved daily 
            events for that date can be retrieved after the browser window is closed and re-opend.`, 
            deployedLink: 'https://wmsimien.github.io/workday-planner/', 
            gitHubLink: 'https://github.com/wmsimien/workday-planner.git'
        },
        {
            imageSrc: dmiss,
            alt:'Dont Miss',
            title: 'Dont Miss',
            desc: `This browser application displays the current workday block-hours starting at 7AM and ending 
            at 7PM. The block-hours background will display in grey for past hours, red for current hour,
            and green for future/upcoming hours. Users will be able to enter an event for any specified 
            block-hour and click the save button to the right of the entered event. Thus, their saved daily 
            events for that date can be retrieved after the browser window is closed and re-opend.`, 
            deployedLink: 'https://quiet-spire-75565.herokuapp.com/', 
            gitHubLink: 'https://github.com/wmsimien/mymisstracker.git'
        },
    ]

    // render navigation components
    const renderPage = () => {
        switch (currentPage){
            case 'Home':
                return <Home 
                    learningQuotes={learningQuotes}
                    />;
            case 'About':
                return <About imageSrc={self}/>;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
         
            case 'Portfolio':
                return <Project
                    projects={projects}
                />;
            default:
                break;
        }
    }

    // // array of nav links objects
    const navbarLinks = [
        {url: '#home', title: 'Home'},
        {url: '#about', title: 'About'},
        {url: '#work', title: 'Portfolio'},
        {url: '#contact', title: 'Contact'},
        {url: '#resume', title: 'Resume'},
    ];

    // // function to handle the navigating of pages
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <>
            <section>    
                <Navbar 
                    navbarLinks={navbarLinks}
                    handlePageChange={handlePageChange}
                />
                <Hero imageSrc={hero} />  
                
                {renderPage()}
            </section>
            <section>
                <Footer />
            </section>   
        </>
    )
}

export default Header;

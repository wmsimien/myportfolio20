import React from 'react'
import '../Home/Home.css';
import { useInView } from 'react-intersection-observer';


const Home = ( { learningQuotes } ) => {
console.log(learningQuotes);

    const { ref, inView, entry } = useInView ({
        threshold: 0.4,
    });

    return (
        <>
        <h1 className="home_title">Wanda M Avery's Portfolio</h1>
        <div className={inView ? "quote quote--zoom" : "quote"} ref={ref} key={ref}>
            {learningQuotes.map((el) => {
                return (
                    <div className="quote_content" key={el.quote}>
                        <h2 className="quote_text">{el.quote}</h2>
                        <h3>{el.author}</h3>     
                    </div>        
                );
            })}    
        </div>
        </>
    )
}

export default Home




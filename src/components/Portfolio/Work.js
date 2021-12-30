import React from 'react'
import '../Portfolio/Work.css';


const Work = ( { works }) => {

    const renederContent = () => {
console.log(works);
        works.map((work) => {
            return (
               
                    <div className="col-sm-6">       {/*  h-100 w-100  style="width: 18rem; */}
                        <div className="card" id="card_id">
                            <img src={work.imageSrc} className="card-img-top" alt={work.alt}/>
                            <div className="card-body" id="card-body-id">
                                <h5 className="card-title">{work.title}</h5>
                                <p className="card-text">{work.desc}</p>
                            </div>            
                        </div>
                        <div className="card-body">
                            <a href={work.deployedLink} className="card-link">Deployed link</a>
                        </div>
                        <div className="card-body">
                            <a href={work.gitHubLink} className="card-link">GitHub link</a>
                        </div>
                    </div>
               
            )
        })
        
    }


    return (
        // <div className="portfolio">
        <div className="row row-cols-1 row-cols-lg-2 g-4" id="row-container">
            <h1>Portfolio</h1>
            {/* {renederContent()} */}
            {works.map((work) => {
            return (
               
                    <div className="col-sm-6">       {/*  h-100 w-100  style="width: 18rem; */}
                        <div className="card" id="card_id">
                            <img src={work.imageSrc} className="card-img-top" alt={work.alt}/>
                            <div className="card-body" id="card-body-id">
                                <h5 className="card-title">{work.title}</h5>
                                <p className="card-text">{work.desc}</p>
                            </div>            
                        </div>
                        <div className="card-body">
                            <a href={work.deployedLink} className="card-link">Deployed link</a>
                        </div>
                        <div className="card-body">
                            <a href={work.gitHubLink} className="card-link">GitHub link</a>
                        </div>
                    </div>
               
            )
        })}
        </div>
    )
}

export default Work

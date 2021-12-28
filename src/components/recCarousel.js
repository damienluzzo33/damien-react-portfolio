import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function RecCarousel() {

    const recSlide1 = [
        {
            author: "Christian Henry",
            title: "Software Engineer at Zeal IT Consultants",
            message: "Damien stands out as one of the Best students I had in my time as a TA with the Full Stack Coding Bootcamp at UT Austin. Damien not only rose to exceed every challenge but was instrumental in helping other students understand complex subjects. Additionally Damien devoted countless hours to organizing and supporting his fellow students both intellectually and emotionally. On his coding prowess alone I would recommend Damien. That said Damien brings along many intangibles that make him indispensable. I am certain Damien will be successful where he goes. Please feel free to reach out with any questions at all.",
            photo: "christianImage"
        },
        {
            author: "Cole Cochran",
            title: "Full Stack Web Developer",
            message: "Damien demonstrates excellent leadership skills in his ability to work as part of a team, or in his assistance of the growth of fellow team members. His problem solving abilities are critical, and analytical. Taking time to help fellow students to understand the code they are working on translates well to a real world instructing. Damien would be an excellent member of a development team, or instructional staff.",
            photo: "coleImage"
        },
        {
            author: "Chuck Stevens",
            title: "Full Stack Web Developer, Professional Dad",
            message: "Damien is a talented full stack developer with an incredible understanding of coding theory and the ability to translate that into great programs. He is a natural leader an teacher that is willing to take time to help others. He has a patient and humble attitude that inspires those around him. I feel incredibly lucky to have worked with him during my time at the Boot Camp. I know he'll be an asset to any company he works for and look forward to following his career in tech.",
            photo: "chuckImage"
        }
    ]

    const recSlide2 = [
        {
            author: "Ethan Cho",
            title: "Software Engineer",
            message: "Damien is an inspirational person and a great role model. He demonstrates the ability to not only be knowledgeable as a developer, but also the ability to lead. I have worked with Damien on the same project for little over a week and he has been incredible in organizing and delegating different tasks to add to the project. He is also a great teacher, with the capability to impart his knowledge in different ways so people of all skill levels can understand the concepts fully. Damien would be an exceptional asset to any developer team that accepts him.",
            photo: "ethanImage"
        },
        {
            author: "Chris Kennard",
            title: "Creative Front-End-First Full-Stack Web Developer",
            message: "Damien Luzzo is without a doubt the kindest most selfless, honest, caring, knowledgeable, and most of all, the most patient individual I've ever had the pleasure of working alongside. But it was more than kindness and patience. Damien has a true passion for teaching and helping others reach goals and an understanding of concepts that seem more daunting than life itself. I learned more from Damien weekly than I did from the actual instructional staff that I paid thousands of dollars to educate me on. Damien (a student himself) did not get paid a single dime while he aided me throughout the entirety of the Bootcamp at the University of Texas at Austin. As a matter of fact, many of times, it felt like Damien enrolled in this Bootcamp just to be able to reach out and help more people. I have not even addressed the fact that this brother can code! Damien Luzzo puts the Full-Stack in Full-Stack Developer. From all things front end: HTML, JavaScript, CSS styling and React. To all things back end: Databases, SQL, API Keys, Servers and so much more...",
            photo: "christopherImage"
        }
        // {
        //     author: "Natalia Hess",
        //     title: "Software Engineer at Lattice",
        //     message: "Damien Luzzo is an inspirational leader and a polymath. He addresses challenges with both the logic of a gifted physicist and the compassion of a true environmentalist. I can say with total confidence that he is capable of accomplishing absolutely anything. Damien's boundless passion is contagious, which makes him a powerful and compelling leader. In addition, his public speaking skills are indisputable--he delivers every word captivatingly and with the utmost clarity. Most importantly, he expresses genuine care and concern for everyone who works with him. Damien readily makes himself available to anyone who needs support or advice.",
        //     photo: ""
        // }
    ]

    const [slideChange, setSlideChange] = React.useState(false);

    const nextRecs = () => {
        setSlideChange(true);
    }

    const prevRecs = () => {
        setSlideChange(false);
    }

    return (
        <div class="carousel">
            <div className="slides">
                <div id="prev">
                    <ArrowBackIosNewIcon className="prevArrow" onClick={prevRecs} style={{zIndex: slideChange ? 10 : -100 }} />
                </div>
                <div
                    id="slide1"
                    style={{width: slideChange ? "0%" : "100%"}}
                >
                    {recSlide1.map((rec) => (
                        <div style={{display: slideChange ? "none" : "flex"}} className="recDiv" key={rec.image}>
                            <div className="recProfile">
                                <div id={rec.photo}  className="recImage" />
                                <h3>{rec.author}</h3>
                                <h4>{rec.title}</h4>
                            </div>
                            <div className="recDetails">
                                <p className="recMessage">{rec.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div 
                    id="slide2"
                    style={{width: slideChange ? "100%" : "0%"}}
                >
                    {recSlide2.map((rec) => (
                        <div style={{display: slideChange ? "flex" : "none"}} className="recDiv" key={rec.image}>
                            <div className="recProfile">
                                <div id={rec.photo} className="recImage" />
                                <h3>{rec.author}</h3>
                                <h4>{rec.title}</h4>
                            </div>
                            <div className="recDetails">
                                <p className="recMessage">{rec.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div id="next">
                    <ArrowForwardIosIcon onClick={nextRecs} className="nextArrow" style={{zIndex: slideChange ? -100 : 10 }} />
                </div>
            </div>
            <div className="slideButtons">
                <button type="button" onClick={prevRecs} >1</button>
                <button type= "button" onClick={nextRecs}>2</button>
            </div>
        </div>
    )
}

export default RecCarousel;
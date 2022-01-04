import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import recs from "../data/rec.json";

function RecCarousel() {

    const recSlide1 = recs.filter((rec) => (
        rec.author === "Christian Henry" || rec.author === "Cole Cochran" || rec.author === "Chuck Stevens"
    ));

    const recSlide2 = recs.filter((rec) => (
        rec.author === "Ethan Cho" || rec.author === "Chris Kennard" || rec.author === "Natalia Hess"
    ));

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
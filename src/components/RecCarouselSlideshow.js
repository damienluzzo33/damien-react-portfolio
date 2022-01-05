import React from "react";
import recs from "../data/rec.json";
import { Carousel } from "react-responsive-carousel";

export default function RecCarouselSlideshow() {

    console.log(recs);

    const styles = {
        backgroundColor: "black !important"
    }

    return (
        <React.Fragment>
            <div className='mainShow'>
                <div className='testimonialBox'>
                    <Carousel transitionTime="500" showStatus={false} showThumbs={false} autoPlay interval="15000" id="recCarouselComponent">
                        {recs.map((rec) => (
                            <div className='testimonialMain'>
                                <p className='testimonialQuote'>
                                    <span className='startQuote'>" </span>
                                    {rec.message}
                                    <span className='endQuote'> "</span>
                                </p>
                                <p className='testimonialSig'>
                                    - {rec.author}, {rec.title}
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </React.Fragment>
    )
}
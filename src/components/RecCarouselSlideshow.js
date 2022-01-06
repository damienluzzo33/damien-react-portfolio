import React from "react";
import recs from "../data/rec.json";
import { Carousel } from "react-responsive-carousel";

export default function RecCarouselSlideshow() {

    return (
        <React.Fragment>
            <div className='mainShow'>
                <div className='testimonialBox'>
                    <Carousel transitionTime="500" showStatus={false} showThumbs={false} autoPlay interval="15000" dynamicHeight={true} id="recCarouselComponent">
                        {recs.map((rec) => (
                            <div className='testimonialMain'>
                                <div className='testimonialQuote'>
                                    <div className='startQuote'></div>
                                    <p>
                                    {rec.message}
                                    </p>
                                    <p className='testimonialSig'>
                                    - {rec.author}, {rec.title}
                                </p>
                                    <div className='endQuote'></div>
                                </div>
                                
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </React.Fragment>
    )
}
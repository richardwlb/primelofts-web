import React from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import './styles.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

export default function Slides() {

    const slideImages = [
        img1,
        img2,
        img3
    ];

    return (
        <div>
            <Slide>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>
                            Prime Lofts<br/>
                            Sinta-se em Casa Quando Estiver Longe
                        </span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                    <span>
                            Prime Lofts<br/>
                            Sinta-se em Casa Quando Estiver Longe
                        </span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                    <span>
                            Prime Lofts<br/>
                            Sinta-se em Casa Quando Estiver Longe
                        </span>
                    </div>
                </div>
            </Slide>
        </div>
    );
}
import {useState} from 'react';
import * as images from "../utils/images.ts";
import './main_page.css';
import * as React from "react";
import BackgroundSquares from "../components/background_squres.tsx";


const MainPage = () => {
    const [shouldFadeOut, setShouldFadeOut] = useState<boolean>(false);


    return <div className={`${shouldFadeOut ? 'fade-out-page' : 'fade-in-page'}`}>
        <BackgroundSquares/>
        <img src={images.underline_big} className="underline-big"/>
        <img src={images.dear1} className="main-dear-1"/>
        <img src={images.dear2} className="main-dear-2"/>
        <a href={'/a-coded-epistolary/#page1'} className="bold-a" onClick={ (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            setShouldFadeOut(true)
            setTimeout(() => {
                window.location.href = '/a-coded-epistolary/#gallery'
            }, 400)
        }
        }><b>[click here to begin]</b></a>
        <img src={images.a_coded_epistolary} className="a-coded-epistolary"/>

    </div>
};

export default MainPage;
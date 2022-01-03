import React from 'react'

import Footer from '../Footer/Footer'

import './Home.css'

const Home = () => {
    return (
        <div>
            <h2 className={"fs-1 m-3"}>RAYMOND HEINZELMAN<br/>STUDENT // LAB ASSISTANT</h2>
            <p className={"m-3"}>College student with lots of interest in growing my work experience. Currently working in Reno Nevada doing analytical lab work with rocks and stuff.</p>
            <h3 className={"fs-2 m-3"}>Software</h3>
            <p className={"m-3"}>Lots of experience with C++, Python, and web languages through my school work.</p>
            <div id={"snippet"}></div>
            <h3 className={"fs-2 m-3"}>Lab Work</h3>
            <p className={"m-3"}>2 years of experience with atomic absorption and inductively coupled plasma mass spectrometry and their methodology.</p>
            <div id={"icp"}></div>
        </div>
    )
}

export default Home
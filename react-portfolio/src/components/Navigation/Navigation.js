import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from "../Contact/Contact"
import Portfolio from "../Portfolio/Portfolio"

const Navigation = ({ selectedPanel }) => {
    switch (selectedPanel) {
        case "about":
            return <AboutMe />
        case "contact":
            return <Contact />
        case "portfolio":
            return <Portfolio />
        default:
            return <AboutMe />
    }
}

export default Navigation;
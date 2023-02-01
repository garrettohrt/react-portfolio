import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from "../Contact/Contact"

const Navigation = ({ selectedPanel }) => {
	switch (selectedPanel) {
        case "about":
            return <AboutMe />
        case "contact":
            return <Contact />
        default:
            return <AboutMe />
    }
}

export default Navigation;
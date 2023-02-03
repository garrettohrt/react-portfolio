import React from 'react';

const Header = ({ selectedPanel, setSelectedPanel }) => {
    return (
        <header>
            <h2>Garrett Ohrt</h2>
            <div role="tablist">
                <button role="tab" aria-selected={selectedPanel === "about"} aria-controls="tabpanel-about" id="tab-about" onClick={() => setSelectedPanel("about")}>About Me</button>
                <button role="tab" aria-selected={selectedPanel === "portfolio"} aria-controls="tabpanel-contact" id="tab-portfolio" onClick={() => setSelectedPanel("portfolio")}>Portfolio</button>
                <button role="tab" aria-selected={selectedPanel === "contact"} aria-controls="tabpanel-contact" id="tab-contact" onClick={() => setSelectedPanel("contact")}>Contact</button>
            </div>
        </header>
    );
};

export default Header;
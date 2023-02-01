import './App.css';
import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation'

function App() {
  const [selectedPanel, setSelectedPanel] = React.useState("about");
  return (
    <div>
         <div>
    <Header selectedPanel={selectedPanel} setSelectedPanel={setSelectedPanel} />
   </div>
   <div>
   <Navigation selectedPanel={selectedPanel} />
   </div>
   <div>
    <Footer />
   </div>
    </div>

  );
}

export default App;

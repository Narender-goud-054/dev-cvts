import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Collaboration from './components/Collaboration/Collaboration';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import Committee from './components/Committee/Committee';
import Venue from './components/Venue/Venue';
import RegistrationPackages from './components/RegistrationPackages/RegistrationPackages';
import Milestones from './components/Milestones/Milestones';
import Abstract from './components/Abstract/Abstract';
import Gallery from './components/Gallery/Gallery';
import AboutHyderabad from './components/AboutHyderabad/AboutHyderabad';
import Footer from './components/Footer/Footer';
import ScientificProgramme from './components/ScientificProgramme/ScientificProgramme';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Collaboration />
      
      <WelcomeMessage />
      <Committee />
      
      <RegistrationPackages />
      
      <Abstract />
      <ScientificProgramme/>
      
      <Gallery />
            
      <Venue />
      <AboutHyderabad />

      <Milestones />

      <Footer />
    </div>
  );
}

export default App;

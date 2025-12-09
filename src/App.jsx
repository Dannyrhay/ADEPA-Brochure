import React, { useState, useEffect } from 'react';
import './index.css';
import SplitScreenHero from './components/SplitScreenHero';
import Hero from './components/Hero';
import WelcomeMessage from './components/WelcomeMessage';
import LoveStory from './components/LoveStory';
import ProposalStory from './components/ProposalStory';
import JourneyGallery from './components/JourneyGallery';
import Functionaries from './components/Functionaries';
import OrderOfService from './components/OrderOfService';
import PhotographyOrder from './components/PhotographyOrder';
import PreWeddingGallery from './components/PreWeddingGallery';
import Reception from './components/Reception';
import Appreciation from './components/Appreciation';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);

  return (
    <div className="app">
      {isLoading && <Loader onLoaded={() => setIsLoading(false)} />}

      {/* Content wrapper with fade-in effect after load */}
      <div style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 1s ease-in-out',
        visibility: isLoading ? 'hidden' : 'visible',
        height: isLoading ? '100vh' : 'auto',
        overflow: isLoading ? 'hidden' : 'visible'
      }}>
        {/* Split Screen Hero with ADEPA '25 */}
        <SplitScreenHero />

        {/* Couple Names Hero */}
        <Hero />

        {/* Welcome Message Section */}
        <WelcomeMessage />

        {/* Our Love Story */}
        <LoveStory />

        {/* The Proposal */}
        <ProposalStory />

        {/* Our Journey in Photos */}
        <JourneyGallery />

        {/* Functionaries */}
        <Functionaries />

        {/* Order of Service */}
        <OrderOfService />

        {/* Photography Order */}
        <PhotographyOrder />

        {/* Pre-Wedding Photos */}
        <PreWeddingGallery />

        {/* Reception */}
        <Reception />

        {/* Appreciation */}
        <Appreciation />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

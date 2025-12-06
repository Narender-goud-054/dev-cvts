import React, { useState, useEffect, useRef } from 'react';
import Video from './Video';
import { FaImage, FaVideo, FaPlay } from 'react-icons/fa';
import  Photo from './Photo';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  // Keep gallery in sync with URL hash so navigation links like
  // `#videos` will switch tab and scroll the videos section into view.
  useEffect(() => {
    const applyHash = () => {
      const hash = (window.location.hash || '').replace('#', '').toLowerCase();
      if (hash === 'videos' || hash === 'photos') {
        setActiveTab(hash);
      }
    };

    // Apply on mount
    applyHash();

    // Listen for future hash changes
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const GALLERY_HASHES = ['#photos', '#videos'];
  const isInitialLoad = useRef(true);
  // When activeTab changes, attempt to scroll the corresponding element
  // into view (smooth). The element is conditionally rendered so this
  // runs after render and will find the element.
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return; // Do not scroll on initial page load
    }
    const hash = window.location.hash.toLowerCase();
    if (!GALLERY_HASHES.includes(hash)) return;
   // const id = activeTab === 'videos' ? 'videos' : 'photos';
    const el = document.getElementById(activeTab);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  const photoGallery = [
    { id: 1, title: 'Conference Hall', src: '/images/gallery/photo1.jpg' },
    { id: 2, title: 'Workshop Session', src: '/images/gallery/photo2.jpg' },
    { id: 3, title: 'Networking Event', src: '/images/gallery/photo3.jpg' },
    { id: 4, title: 'Keynote Speech', src: '/images/gallery/photo4.jpg' },
    { id: 5, title: 'Panel Discussion', src: '/images/gallery/photo5.jpg' },
    { id: 6, title: 'Exhibition Area', src: '/images/gallery/photo6.jpg' }
  ];

  const videoGallery = [
    { id: 1, title: 'Conference Highlights 2024', thumbnail: './images/logos/cvts-logo.jpg', url: 'https://youtu.be/kespuIraKw8?si=Iqoz-y7MBe2oRmvH' },
    { id: 2, title: 'HOW NOT TO KILL A PATIENT', thumbnail: './images/logos/cvts-logo.jpg', url: 'https://youtu.be/eaSSBDemr5k?si=tR8K4lWWVKtbpDrb' },
    { id: 3, title: 'CVTS BOOT CAMP 2024 INAUGURATION', thumbnail: './images/logos/cvts-logo.jpg', url: 'https://youtu.be/jm5u8V2nC1A?si=L7uqpNpG2eGAF2-Z' }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Explore photos and videos from our conferences
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'photos'
                  ? 'bg-gradient-to-r from-[#D17950] to-[#DC8159] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FaImage />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 ${
                activeTab === 'videos'
                  ? 'bg-gradient-to-r from-[#D17950] to-[#DC8159] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FaVideo />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* Photo Gallery */}
        {activeTab === 'photos' && (
          <div id="photos" className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                photoGallery.map((photo) => (<Photo key={photo.id} photo={photo}/>))
              }
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-[#D17950] to-[#DC8159] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View All Photos
              </button>
            </div>
          </div>
        )}

        {/* Video Gallery */}
        {activeTab === 'videos' && (
          <div id="videos" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {videoGallery.map((video) => (
                <Video key={video.id} video={video}/>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-[#D17950] to-[#DC8159] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                View All Videos
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
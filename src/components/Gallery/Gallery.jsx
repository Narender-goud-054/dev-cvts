import React, { useState } from 'react';
import { FaImage, FaVideo, FaPlay } from 'react-icons/fa';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photoGallery = [
    { id: 1, title: 'Conference Hall', src: '/images/gallery/photo1.jpg' },
    { id: 2, title: 'Workshop Session', src: '/images/gallery/photo2.jpg' },
    { id: 3, title: 'Networking Event', src: '/images/gallery/photo3.jpg' },
    { id: 4, title: 'Keynote Speech', src: '/images/gallery/photo4.jpg' },
    { id: 5, title: 'Panel Discussion', src: '/images/gallery/photo5.jpg' },
    { id: 6, title: 'Exhibition Area', src: '/images/gallery/photo6.jpg' }
  ];

  const videoGallery = [
    { id: 1, title: 'Conference Highlights 2024', thumbnail: '/images/gallery/video1.jpg', url: '#' },
    { id: 2, title: 'Surgical Techniques Workshop', thumbnail: '/images/gallery/video2.jpg', url: '#' },
    { id: 3, title: 'Expert Panel Discussion', thumbnail: '/images/gallery/video3.jpg', url: '#' }
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
              {photoGallery.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative aspect-video bg-gradient-to-br from-blue-200 to-orange-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-orange-200"><span class="text-gray-600 font-medium">${photo.title}</span></div>`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
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
                <div
                  key={video.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-blue-200 to-orange-200">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-200 to-orange-200"><div class="text-center"><div class="text-4xl mb-2">📹</div><span class="text-gray-600">Video</span></div></div>';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-[#D17950] text-2xl ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-gray-800 font-bold text-lg">{video.title}</h3>
                  </div>
                </div>
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
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  const usefulLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Registration', href: '#registration' },
    { name: 'About Hyderabad', href: '#hyderabad' },
    { name: 'Venue', href: '#venue' },
    { name: 'Committee', href: '#committee' }
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl font-bold">NIMS CVTS</span>
              <span className="text-2xl font-semibold text-red-400">2026</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              NIMS CVTS 2026 will be a premier gathering of global cardiothoracic experts at Trauma Auditorium NIMS, 
              Hyderabad. The conference will feature advanced scientific sessions, innovative surgical techniques, and 
              discussions shaping the future of cardiac care. A special highlight will be the recognition of Indian 
              surgeons making a global impact.
            </p>
            <p className="text-gray-400 text-sm">
              Organized by Dr. Pooja, and Team
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference Secretariat */}
          <div>
            <h3 className="text-xl font-bold mb-6">NIMS CVTS</h3>
            
            {/* Vama Logo */}
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <img 
                src="/images/logos/vama-logo.png" 
                alt="NIMS CVTS"
                className="h-12 object-contain mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="h-12 flex items-center justify-center"><span class="text-sm">NIMS CVTS</span></div>';
                }}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-400 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Nizam's Institute of Medical Sciences
                  Punjagutta, Hyderabad - 500082, Telangana, INDIA.
                </p>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-red-400 mr-3" />
                <div className="text-gray-300 text-sm">
                  <p>+91-40-23489000,+91-40-23396552</p>
                  <p>+91-40-23489244,+91-40-23489245</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-red-400 mr-3" />
                <a 
                  href="mailto:nimscvts@gmail.com"
                  className="text-gray-300 hover:text-red-400 transition-colors text-sm"
                >
                  nimscvts@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://www.youtube.com/@NIMSCVTS"
                target="_blank" 
                className="text-gray-300 hover:text-red-400 transition-colors duration-300"
                aria-label="Youtube"
              >
                <FaYoutube size={24} />
              </a>
            </div>

            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© Copyright by NIMS CVTS 2026. All Rights Reserved.</p>
              <p className="mt-2">
                Design & Developed by{' '}
                <a 
                  href=" " 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  Dev2Dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

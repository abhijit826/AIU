import React, { useState } from 'react';
import { Menu, Map, BookOpen, Calendar, X } from 'lucide-react';

function QRCodeScanner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      icon: Map,
      text: 'Campus Map',
      link: null // Replace with actual map link if needed
    },
    {
      icon: BookOpen,
      text: 'Brochure',
      link: 'https://srmsigaram.com/downloads/SRMSIGARAM_2024_brochure.-rules%20and%20regulations.pdf'
    },
    {
      icon: Calendar,
      text: 'Event Schedule',
      link: 'https://srmsigaram.com/downloads/Events_Schedule.pdf'
    }
  ];

  const handleItemClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {/* Main Container */}
      <div className="w-full max-w-md px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">SRM UNIVERSITY</h1>
        </div>

        {/* Menu Button */}
        <div className="flex justify-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span>Menu</span>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="mt-4 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(item.link)}
                className="w-full bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors"
              >
                <item.icon className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-medium">{item.text}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Background Logos */}
      <div className="absolute top-4 left-4">
        <div className="bg-blue-600 text-white p-2 rounded-full">SRM</div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="bg-green-600 text-white p-2 rounded-full">AIU</div>
      </div>
    </div>
  );
}

export default QRCodeScanner;

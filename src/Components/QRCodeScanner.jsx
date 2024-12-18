import React, { useState } from "react";
import { Map, Calendar, BookOpen } from "lucide-react";

function HomePage() {
  const [activeSection, setActiveSection] = useState("map");

  const openBrochure = () => {
    window.open(
      "https://srmsigaram.com/downloads/SRMSIGARAM_2024_brochure._compressed.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openSchedule = () => {
    window.open(
      "https://srmsigaram.com/downloads/Events_Schedule.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case "map":
        return (
          <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Campus Map</h2>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              Campus Map Placeholder
            </div>
          </div>
        );
      case "brochure":
        return (
          <div
            className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={openBrochure}
          >
            <h2 className="text-2xl font-bold mb-4">University Brochure</h2>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              Click to Open Brochure PDF
              <BookOpen className="ml-2 w-6 h-6" />
            </div>
          </div>
        );
      case "schedule":
        return (
          <div
            className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={openSchedule}
          >
            <h2 className="text-2xl font-bold mb-4">Academic Schedule</h2>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              Click to Open Events Schedule PDF
              <Calendar className="ml-2 w-6 h-6" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Section with Logos */}
      <div className="w-full py-4 px-4">
        <div className="flex justify-between max-w-4xl mx-auto">
          <div className="bg-blue-600 text-white p-4 rounded-full">SRM</div>
          <div className="bg-green-600 text-white p-4 rounded-full">AIU</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-8">
        {/* Navigation Buttons */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveSection("map")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === "map"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <Map className="w-5 h-5" />
            <span>Map</span>
          </button>

          <button
            onClick={() => setActiveSection("brochure")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === "brochure"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            <span>Brochure</span>
          </button>

          <button
            onClick={() => setActiveSection("schedule")}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              activeSection === "schedule"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <Calendar className="w-5 h-5" />
            <span>Schedule</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="w-full flex justify-center">{renderContent()}</div>
      </div>
    </div>
  );
}

export default HomePage;

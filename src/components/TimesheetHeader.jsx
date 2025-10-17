import React from "react";

const TimesheetHeader = () => {
  return (
    <header className="bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1)]">
        <div className="w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-900">
                ticktock
              </h1>
              <nav className="hidden md:flex items-center">
                <a
                  href="#"
                  className="text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Timesheets
                </a>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="flex items-center text-[16px] font-medium text-gray-500 hover:text-gray-900">
                <span>John Doe</span>
                <span className="material-icons text-lg ml-1">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default TimesheetHeader;

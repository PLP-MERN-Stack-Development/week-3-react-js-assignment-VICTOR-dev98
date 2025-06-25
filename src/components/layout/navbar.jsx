import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Increase the font size of "My App" */}
        <Link to="/" className="text-3xl font-bold">
          My App
        </Link>
        <button
          onClick={toggleTheme}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}


import React from "react";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

const Navigation = () => {
  return (
    <nav className="bg-manilla border-b-2 border-kraft sticky top-0 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-3xl font-bold text-kraft glitch"
          data-text="Automated Research and Trigger Finder"
        >
          Automated Research and Trigger Finder
        </h1>
        <div className="hidden lg:flex space-x-6">
          {/* Use Link from react-scroll for smooth scrolling */}
          <Link
            to="research-analysis" // Target section ID
            smooth={true} // Enable smooth scrolling
            duration={500} // Scroll duration in milliseconds
            offset={-100} // Offset to account for navbar height
            className="font-semibold text-kraft hover:text-book-cloth cursor-pointer"
          >
            Research Parameters
          </Link>
          <Link
            to="full-analysis" // Target section ID
            smooth={true}
            duration={500}
            offset={-100} // Offset to account for navbar height
            className="font-semibold text-kraft hover:text-book-cloth cursor-pointer"
          >
            Analysis
          </Link>
          <Link
            to="references" // Target section ID
            smooth={true}
            duration={500}
            offset={-100} // Offset to account for navbar height
            className="font-semibold text-kraft hover:text-book-cloth cursor-pointer"
          >
            References
          </Link>
        </div>
        <button className="md:hidden text-kraft">
          <i className="bi bi-list text-2xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

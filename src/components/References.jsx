import React, { useState } from "react";

const References = ({ references }) => {
  const [showAll, setShowAll] = useState(false); // State to toggle dropdown
  const visibleReferences = showAll ? references : references.slice(0, 5); // Show first 5 or all

  // Function to extract the favicon URL from a website URL
  const getFaviconUrl = (url) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}`;
    } catch (error) {
      return ""; // Fallback if URL is invalid
    }
  };

  return (
    <div
      id="references"
      className="bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow mt-6"
    >
      <h2 className="text-2xl font-bold text-kraft mb-4">References</h2>
      <div className="space-y-3">
        {visibleReferences.map((reference, index) => (
          <div
            key={index}
            className="flex items-center p-3 bg-manilla border-2 border-kraft rounded-lg hover:shadow-subtle transition-shadow"
          >
            {/* Favicon */}
            <img
              src={getFaviconUrl(reference)}
              alt="Favicon"
              className="w-5 h-5 mr-3"
              onError={(e) => {
                e.target.style.display = "none"; // Hide if favicon fails to load
              }}
            />
            {/* Link */}
            <a
              href={reference}
              target="_blank"
              rel="noopener noreferrer"
              className="text-kraft hover:underline break-all" // Use break-all to prevent overflow
            >
              {reference}
            </a>
          </div>
        ))}
      </div>

      {/* Dropdown for remaining links */}
      {references.length > 5 && (
        <div className="mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-kraft hover:underline focus:outline-none"
          >
            {showAll ? "Show Less" : `Show All (${references.length - 5} more)`}
          </button>
        </div>
      )}
    </div>
  );
};

export default References;

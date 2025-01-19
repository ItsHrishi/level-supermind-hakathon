import React from "react";

const Competitors = ({ competitors }) => {
  return (
    <div className="space-y-3">
      {competitors.map((competitor, index) => (
        <div
          key={index}
          className="flex items-center p-3 bg-minimal-white border-2 border-minimal-gray-700 rounded-lg hover:shadow-subtle transition-shadow animate-border-colors"
        >
          <span className="text-lg font-semibold text-minimal-teal">
            {competitor}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Competitors;

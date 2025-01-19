import React from "react";
import { AlertTriangle } from "lucide-react"; // Using a generic icon for all pain points

const PainPoints = ({ painPoints }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {painPoints.map((point, index) => (
        <div
          key={index}
          className="flex items-start p-4 bg-manilla border-2 border-kraft rounded-lg hover:shadow-subtle-lg transition-shadow"
        >
          {/* Icon */}
          <div className="mr-4 flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-orange-500" />{" "}
            {/* Generic icon */}
          </div>
          {/* Pain Point Text */}
          <div className="text-kraft font-medium break-words">{point}</div>
        </div>
      ))}
    </div>
  );
};

export default PainPoints;

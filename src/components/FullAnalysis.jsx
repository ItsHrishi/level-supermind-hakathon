import { useState } from "react";
import ReactMarkdown from "react-markdown";

const FullAnalysis = ({ analysis }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-subtle">
      <div className={`text-kraft ${!isExpanded ? "line-clamp-3" : ""}`}>
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-2xl font-bold mt-4 mb-2" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-xl font-bold mt-4 mb-2" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-lg font-bold mt-4 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 mb-4" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 mb-4" {...props} />
            ),
            li: ({ node, ...props }) => <li className="mb-2" {...props} />,
            a: ({ node, ...props }) => (
              <a
                className="text-kraft hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
          }}
        >
          {analysis}
        </ReactMarkdown>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-kraft hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default FullAnalysis;

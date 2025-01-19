import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  const loadingMessages = [
    "Collecting data from various sources...",
    "Analyzing the collected data...",
    "Scraping additional information from the web...",
    "Processing the data for insights...",
    "Cleaning and organizing the data...",
    "Generating final output...",
    "Almost there! Finalizing the results...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % loadingMessages.length);
    }, 7000); // Change message every 7 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-60 bg-manilla">
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 rounded-full"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 180, 360],
              backgroundColor: ["#FF6B6B", "#4ECDC4", "#FFE66D"], // Color transition
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <motion.div
        key={currentMessage} // Key prop to trigger animation on message change
        className="mt-4 text-lg text-gray-700"
        initial={{ opacity: 0, scale: 0.9 }} // Start slightly transparent and scaled down
        animate={{ opacity: 1, scale: 1 }} // Animate to fully visible and normal scale
        exit={{ opacity: 0, scale: 0.9 }} // Exit animation (optional, for advanced use)
        transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      >
        {loadingMessages[currentMessage]}
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;

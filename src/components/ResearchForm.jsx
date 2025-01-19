import React, { useState } from "react";

const ResearchForm = ({
  onSubmit,
  onChange,
  formData,
  setAnalysisData,
  analysisData,
  setLoading,
}) => {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    const newErrors = {};
    if (!formData.project) newErrors.project = "Product Name is required.";
    if (!formData.domain) newErrors.domain = "Domain is required.";
    if (!formData.description)
      newErrors.description = "Description is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    console.log("Form Data Submitted:", formData);

    try {
      setAnalysisData(null);
      const response = await fetch(import.meta.env.VITE_BACKEND_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("API Response:", data);
        setAnalysisData(data?.data);
        setLoading(false);
      } else {
        console.error("API Error:", response.statusText);
        setLoading(false);
        alert("Failed to submit data. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setLoading(false);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-manilla border-2 border-kraft p-6 mb-8 shadow-subtle rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-kraft">
        Research Parameters
      </h2>
      <form
        id="researchForm"
        className="grid md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        {/* Product Name Field */}
        <div className="flex flex-col">
          <label htmlFor="project" className="text-kraft font-medium mb-1">
            Product Name *
          </label>
          <input
            type="text"
            id="project"
            name="project"
            placeholder="Enter the name of the product"
            value={formData.project}
            onChange={onChange}
            className={`p-2 border-2 border-kraft bg-manilla text-kraft placeholder-book-cloth placeholder-opacity-50 rounded-lg focus:outline-none ${
              errors.project ? "border-red-500" : "focus:border-book-cloth"
            }`}
            aria-describedby="project-error"
          />
          {errors.project && (
            <p id="project-error" className="text-red-500 text-sm mt-1">
              {errors.project}
            </p>
          )}
        </div>

        {/* Domain Field */}
        <div className="flex flex-col">
          <label htmlFor="domain" className="text-kraft font-medium mb-1">
            Market Segment *
          </label>
          <input
            type="text"
            id="domain"
            name="domain"
            placeholder="Enter the Market Segment (e.g., Sports, Finance)"
            value={formData.domain}
            onChange={onChange}
            className={`p-2 border-2 border-kraft bg-manilla text-kraft placeholder-book-cloth placeholder-opacity-50 rounded-lg focus:outline-none ${
              errors.domain ? "border-red-500" : "focus:border-book-cloth"
            }`}
            aria-describedby="domain-error"
          />
          {errors.domain && (
            <p id="domain-error" className="text-red-500 text-sm mt-1">
              {errors.domain}
            </p>
          )}
        </div>

        {/* Description Field */}
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="description" className="text-kraft font-medium mb-1">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Provide a detailed description of the product"
            value={formData.description}
            onChange={onChange}
            className={`p-2 border-2 border-kraft bg-manilla text-kraft placeholder-book-cloth placeholder-opacity-50 rounded-lg focus:outline-none ${
              errors.description ? "border-red-500" : "focus:border-book-cloth"
            }`}
            rows="4"
            aria-describedby="description-error"
          />
          {errors.description && (
            <p id="description-error" className="text-red-500 text-sm mt-1">
              {errors.description}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-kraft text-manilla font-bold py-2 px-4 border-2 border-book-cloth rounded-lg shadow-subtle hover:bg-book-cloth hover:text-kraft transition-all duration-300 md:col-span-2"
        >
          Analyze Data
        </button>
      </form>
    </div>
  );
};

export default ResearchForm;

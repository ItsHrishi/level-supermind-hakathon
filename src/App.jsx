import React, { useState } from "react";
import Navigation from "./components/Navigation";
import ResearchForm from "./components/ResearchForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [formData, setFormData] = useState({
    project: "",
    domain: "",
    description: "",
  });
  const [analysisData, setAnalysisData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Analysis started! This would typically trigger the data analysis process."
    );
  };

  return (
    <div className="bg-manilla min-h-screen font-sans">
      <Navigation />
      <div id="research-analysis" className="container mx-auto p-4">
        <ResearchForm
          setLoading={setLoading}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          formData={formData}
          setAnalysisData={setAnalysisData}
          analysisData={analysisData}
        />
        <Dashboard
          loading={loading}
          setLoading={setLoading}
          analysisData={analysisData}
        />
      </div>
    </div>
  );
}

export default App;

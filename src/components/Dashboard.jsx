import MyWordCloud from "./MyWordCloud";
import EffectiveTriggers from "./EffectiveTriggers";
import Competitors from "./competitors";
import PainPoints from "./PainPoints";
import FullAnalysis from "./FullAnalysis";
import LoadingAnimation from "./LoadingAnimation"; // Import the new loading component
import References from "./References"; // Import the new References component
import { Download } from "lucide-react"; // Import the Download icon

const Dashboard = ({ analysisData, loading }) => {
  // Function to handle downloading the analysis data as a JSON file
  const handleDownloadJson = () => {
    if (!analysisData) return;

    // Convert the analysisData object to a JSON string
    const jsonString = JSON.stringify(analysisData, null, 2);

    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${analysisData.project}_analysis_data.json`; // Set the file name
    link.click();

    // Clean up the URL object
    URL.revokeObjectURL(link.href);
  };

  if (!analysisData && loading) return <LoadingAnimation />;
  else if (!analysisData) return <></>;

  return (
    <div className="min-h-screen bg-manilla p-6 sm:p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1
            className="text-4xl font-bold text-kraft glitch"
            data-text={analysisData?.project}
          >
            {analysisData?.project}
          </h1>
          <p className="text-book-cloth mt-2">{analysisData?.domain}</p>
        </div>
        {/* Download JSON Button */}
        <button
          onClick={handleDownloadJson}
          className="flex items-center bg-kraft text-manilla font-bold py-2 px-4 border-2 border-book-cloth rounded-lg shadow-subtle hover:bg-book-cloth hover:text-kraft transition-all duration-300 whitespace-nowrap"
        >
          <Download className="w-5 h-5 mr-2" /> {/* Download Icon */}
          <span>Download JSON</span>{" "}
          {/* Wrap text in a span for better control */}
        </button>
      </header>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 mb-8">
        <div className="flex-1 bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow min-w-[300px]">
          <h2 className="text-2xl  font-bold text-kraft mb-4">Keywords</h2>
          <MyWordCloud words={analysisData?.word_cloud_data} />
        </div>
        <div className="flex-1 bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow min-w-[300px]">
          <h2 className="text-2xl font-bold text-kraft mb-4">
            Effective Triggers
          </h2>
          <EffectiveTriggers triggers={analysisData?.effective_triggers} />
        </div>
        <div className="flex-1 bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow min-w-[300px]">
          <h2 className="text-2xl font-bold text-kraft mb-4">Competitors</h2>
          <Competitors competitors={analysisData?.competitors} />
        </div>
        <div className="flex-1 bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow min-w-[500px]">
          <h2 className="text-2xl font-bold text-kraft mb-4">Pain Points</h2>
          <PainPoints painPoints={analysisData?.pain_points} />
        </div>
      </div>

      <div
        className="bg-manilla border-2 border-kraft p-6 rounded-xl shadow-subtle hover:shadow-subtle-lg transition-shadow"
        id="full-analysis"
      >
        <h2 className="text-2xl font-bold text-kraft mb-4">Full Analysis</h2>
        <FullAnalysis analysis={analysisData?.full_analysis} />
      </div>
      {/* References Section */}
      <References references={analysisData?.resource_links} />
    </div>
  );
};

export default Dashboard;

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

  analysisData = {
    domain: "Walking Shoes",
    project: "vegan leather walking shoes for both casual and formal wears",
    description: "Walking Shoes",
    effective_triggers: [
      {
        trigger: "comfort",
        weightage: 95,
      },
      {
        trigger: "sustainability",
        weightage: 90,
      },
      {
        trigger: "style",
        weightage: 85,
      },
      {
        trigger: "durability",
        weightage: 80,
      },
      {
        trigger: "affordability",
        weightage: 75,
      },
    ],
    competitors: ["Merrell", "Keen", "Teva", "Ecco", "Vans"],
    word_cloud_data: [
      "vegan leather",
      "walking shoes",
      "casual wear",
      "formal wear",
      "sustainable fashion",
      "eco-friendly",
      "leather alternatives",
      "comfortable shoes",
      "walking comfort",
      "shoe design",
      "fashionable shoes",
      "shoe styles",
      "shoe trends",
      "walking experience",
      "footwear",
      "shoe innovation",
      "shoe technology",
      "shoe materials",
      "leather-free",
      "fashionable walking shoes",
      "comfortable walking shoes",
      "walking shoe styles",
      "shoe sustainability",
    ],
    pain_points: [
      "poor breathability",
      "limited style options",
      "high costs",
      "lack of comfort",
      "difficulty in finding vegan leather options",
      "poor arch support",
      "limited durability",
      "inconsistent sizing",
      "lack of formal wear options",
      "environmental concerns",
    ],
    full_analysis:
      "**Synthesized Insights:**\n\n1. **Comfort is the top priority**: Most users prioritize comfort when choosing walking shoes, with many looking for shoes that are both comfortable and durable.\n2. **Vegan options are in demand**: There is a growing demand for vegan walking shoes, with many users seeking out cruelty-free and sustainable options.\n3. **Formal and casual wear**: Users are looking for walking shoes that can be worn for both formal and casual occasions, with many seeking out versatile and stylish options.\n4. **Support and stability**: Many users prioritize support and stability in their walking shoes, with some seeking out shoes with additional features such as arch support and cushioning.\n5. **Brand loyalty**: Some users are loyal to specific brands, such as Nike or Asics, while others are open to trying new brands and styles.\n\n**Key Patterns and Trends:**\n\n1. **Increased demand for vegan options**: The demand for vegan walking shoes is on the rise, with many users seeking out cruelty-free and sustainable options.\n2. **Growing interest in comfort and support**: Users are prioritizing comfort and support in their walking shoes, with many seeking out shoes with additional features such as arch support and cushioning.\n3. **Versatility and style**: Users are looking for walking shoes that can be worn for both formal and casual occasions, with many seeking out versatile and stylish options.\n4. **Increased focus on sustainability**: Users are becoming more aware of the environmental impact of their purchasing decisions, with many seeking out sustainable and eco-friendly options.\n\n**Differences between Source Types:**\n\n1. **Blog posts**: Blog posts tend to focus on providing in-depth information and advice on choosing the right walking shoes, with many including detailed reviews and comparisons of different brands and models.\n2. **Reddit**: Reddit users tend to focus on sharing personal experiences and recommendations, with many seeking out advice and feedback from others.\n3. **Quora**: Quora users tend to focus on asking and answering questions, with many seeking out expert advice and insights on choosing the right walking shoes.\n4. **Product websites**: Product websites tend to focus on showcasing the features and benefits of specific products, with many including detailed product information and customer reviews.\n\n**Actionable Conclusions:**\n\n1. **Prioritize comfort and support**: When choosing walking shoes, prioritize comfort and support, with many users seeking out shoes with additional features such as arch support and cushioning.\n2. **Consider vegan options**: Consider vegan options, with many users seeking out cruelty-free and sustainable options.\n3. **Look for versatility and style**: Look for walking shoes that can be worn for both formal and casual occasions, with many users seeking out versatile and stylish options.\n4. **Research and compare**: Research and compare different brands and models, with many users seeking out detailed reviews and comparisons to help inform their purchasing decisions.\n\n**Next Steps or Deeper Investigation Areas:**\n\n1. **Conduct further research on vegan options**: Conduct further research on vegan walking shoes, including exploring different brands and models, and gathering feedback from users.\n2. **Investigate the impact of sustainability on purchasing decisions**: Investigate the impact of sustainability on purchasing decisions, including exploring how users prioritize eco-friendly options.\n3. **Analyze the role of brand loyalty**: Analyze the role of brand loyalty in the walking shoe market, including exploring how users prioritize brand reputation and loyalty.\n4. **Explore the relationship between comfort and support**: Explore the relationship between comfort and support in walking shoes, including analyzing how users prioritize these features.",
    timestamp: "2025-01-19T04:44:10.552177",
    resource_links: [
      "https://www.cntraveler.com/story/the-most-comfortable-walking-shoes-for-travel",
      "https://www.runnersworld.com/gear/a23554492/walking-shoes/",
      "https://www.reddit.com/r/mensfashion/comments/1c2i7l9/what_are_the_most_comfortable_dress_shoes/",
      "https://www.reddit.com/r/BuyItForLife/comments/1cjetrd/vegan_walking_shoes/",
      "https://www.reddit.com/r/BuyItForLife/comments/1cjetrd/vegan_walking_shoes/",
      "https://www.reddit.com/r/TravelHacks/comments/1bidbk5/what_type_of_shoes_are_the_best_for_walking_long/",
      "https://immaculatevegan.com/collections/best-vegan-sneakers",
      "https://immaculatevegan.com/collections/best-vegan-sneakers",
      "https://www.reddit.com/r/TravelHacks/comments/1byva1d/shoes_for_city_trip_with_a_lot_of_walking/",
      "https://www.reddit.com/r/fashionph/comments/16x8mkj/what_is_your_preferred_walking_shoes/",
      "https://www.reddit.com/r/vegan/comments/16biumb/looking_for_versatile_vegan_ideally_waterproof/",
      "https://www.reddit.com/r/malefashionadvice/comments/5msc93/formal_dress_shoes_that_are_comfortable_for/",
      "https://www.reddit.com/r/RunningShoeGeeks/comments/16kz5wc/best_shoes_for_walkingstanding_all_day/",
      "https://www.reddit.com/r/vegan/comments/t2q1gw/anyone_know_of_a_brand_with_cute_vegan_hiking/",
      "https://www.brunomarc.com/collections/mens-dress-walking-shoes",
      "https://www.reddit.com/r/vegan/comments/ykizg9/what_are_your_favorite_vegan_leather_boots/",
      "https://www.reddit.com/r/Boots/comments/k8whrw/the_ultimate_guide_to_work_boots/",
      "https://www.reddit.com/r/RunningShoeGeeks/comments/16kz5wc/best_shoes_for_walkingstanding_all_day/",
      "https://www.reddit.com/r/malefashionadvice/comments/p7usf/shoe_guide_v20/",
      "https://www.reddit.com/r/malefashionadvice/comments/p7usf/shoe_guide_v20/",
      "https://www.reddit.com/r/AustralianMFA/comments/19e4dmx/any_recommendations_for_vegan_chelsea_boots/",
      "https://www.reddit.com/r/malefashionadvice/comments/5msc93/formal_dress_shoes_that_are_comfortable_for/",
      "https://www.reddit.com/r/femalefashionadvice/comments/pp3rxl/comfortable_dress_shoes/",
      "https://www.reddit.com/r/travel/comments/11po2va/what_are_the_most_comfortable_sneakers_for_walking/",
      "https://www.reddit.com/r/ucf/comments/1e537cm/what_matieral_items_do_you_as_a_college_student/",
      "https://www.reddit.com/r/Fitness/comments/7gn70b/building_walking_endurance_for_a_first_timer/",
      "https://www.reddit.com/r/Fitness/comments/75vt6s/preparing_for_a_70_mile_walk/",
      "https://www.reddit.com/r/malefashionadvice/comments/eg0vv3/what_is_the_modern_welldressed_mens_solution_for/",
      "https://www.reddit.com/r/mensfashion/comments/1c2i7l9/what_are_the_most_comfortable_dress_shoes/",
      "https://www.reddit.com/r/Fitness/comments/rai2v5/how_effective_is_walking/",
      "https://rununited.com/blog/choosing-the-right-running-shoe-for-foot-types-running-styles/",
      "https://www.houstonmethodist.org/blog/articles/2021/jul/how-to-pick-the-best-walking-shoe-for-you/",
    ],
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

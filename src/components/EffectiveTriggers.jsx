import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

const EffectiveTriggers = ({ triggers }) => {
  // Map the triggers data to the format expected by RadarChart
  const triggerData = triggers.map((trigger) => ({
    name: trigger.trigger, // Use the trigger name
    value: trigger.weightage, // Use the weightage as the value
    fullMark: 100, // Set the full mark to 100
  }));

  return (
    <div className="mt-2 flex justify-center">
      <RadarChart width={500} height={300} data={triggerData}>
        <PolarGrid stroke="#04427F" />
        <PolarAngleAxis dataKey="name" stroke="#CC785C" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CC785C" />
        <Radar
          name="Trigger Effectiveness"
          dataKey="value"
          stroke="#04427F"
          fill="#04427F"
          fillOpacity={0.6}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#FFFFFF",
            border: "1px solid #04427F",
          }}
        />
      </RadarChart>
    </div>
  );
};

export default EffectiveTriggers;

import WordCloud from "react-d3-cloud";

export default function MyWordCloud({ words }) {
  const data = words.map((text) => ({
    text,
    value: 20 + Math.random() * 90,
  }));

  return (
    <div className="h-[300px] w-full">
      <WordCloud
        data={data}
        font="Arial"
        fontWeight="bold"
        fontSize={(word) => word.value}
        rotate={0}
        padding={2}
        fill={(_, i) => (i % 2 === 0 ? "#CC785C" : "#04427F")}
      />
    </div>
  );
}

import { useEffect, useState } from "react";

export default function RoarAnimation() {
  const [stage, setStage] = useState("initial");

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage("expanded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const words = [
    { base: "R", rest: "eset" },
    { base: "R", rest: "einnovate" },
    { base: "R", rest: "efine" },
  ];

  return (
    <>
    <div className="flex justify-center items-center mb-4">
      <div className="flex gap-6 font-semibold">
        {words.map((word, wordIndex) => (
          <div key={wordIndex} className="flex">
            {/* Base R */}
            <span className="text-2xl md:text-4xl lg:text-5xl animate-fade-in-up mx-auto">R</span>

            {/* Expanding letters */}
            <span
              className={`
                overflow-hidden content-end inline-block
                transition-all duration-1000 ease-out
                ${stage === "expanded" ? "max-w-[20rem] opacity-100" : "max-w-0 opacity-0"}
              `}
            >
              <span className="text-2xl md:text-4xl lg:text-5xl align-text-bottom mx-auto">
                {stage === "expanded" && word.rest}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
    {/* <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
        Hello
    </h1> */}
    </>
  );
}

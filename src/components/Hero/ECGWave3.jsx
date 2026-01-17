import { useEffect, useRef } from "react";

export default function ECGWave() {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.willChange = "stroke-dashoffset";

    const startAnimation = () => {
      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 1.8s linear";
      path.style.strokeDashoffset = "0";
    };

    const handleTransitionEnd = () => {
      path.style.transition = "none";
      path.style.strokeDashoffset = length;
      requestAnimationFrame(startAnimation);
    };

    path.addEventListener("transitionend", handleTransitionEnd);
    requestAnimationFrame(startAnimation);

    return () => {
      path.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-3 md:py-5 lg:py-8">
      <svg
        className="w-[90%] h-44"
        viewBox="0 0 500 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          d="
            M0 50 
            L80 50 
            L100 50 
            L120 20 
            L135 80 
            L150 50 
            L210 50 
            L230 40 
            L250 60 
            L270 50 
            L350 50
            L370 50
            L390 20 
            L405 80 
            L420 50 
            L500 50
          "
          stroke="#00FF6A"
          strokeWidth="3"
          strokeLinecap="round"
          className="drop-shadow-[0_0_6px_#00FF6A]"
        />

        <g transform="translate(250 50)">
          <animateTransform
            attributeName="transform"
            type="scale"
            additive="sum"
            values="1;1.15;1"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <image
            href="/images/heart3.png"
            x="-50"
            y="-50"
            width="100"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "grayscale(30%)" }}
            aria-hidden="true"
            pointerEvents="none"
          />
        </g>
      </svg>
    </div>
  );
}
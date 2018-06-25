import React from "react";

const Lamp = props => {
  setImmediate(() => {
    var anim = document.getElementById("opacityAnimation");
    if (anim) anim.beginElement();
  });

  return (
    <div>
      <svg
        width="180"
        height="180"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="inset-shadow">
            <feFlood floodColor="black" />
            <feComposite operator="xor" in2="SourceGraphic" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite operator="in" in2="SourceGraphic" result="map" />
            <feDiffuseLighting
              lightingColor="white"
              surfaceScale="2"
              diffuseConstant="1"
            >
              <feSpotLight x="-30" y="-30" z="230" />
            </feDiffuseLighting>
            <feBlend mode="multiply" in="SourceGraphic" />
            <feComposite operator="in" in2="SourceGraphic" />
          </filter>
        </defs>

        <g>
          <circle
            filter="url(#inset-shadow)"
            cx="90"
            cy="90"
            r="72"
            fill="none"
            stroke="#ddd"
            strokeWidth="18"
          />

          <circle
            id="innerCircle"
            cx="90"
            cy="90"
            r="68"
            opacity={props.lit ? "1.0" : "0.1"}
            fill={props.color}
            strokeWidth="2"
          >
            {props.lit && (
              <animate
                id="opacityAnimation"
                attributeType="xml"
                attributeName="fill-opacity"
                values="0.1;1.0"
                dur={props.animationTime / 1000 + "s"}
              />
            )}
          </circle>
        </g>
      </svg>
    </div>
  );
};

Lamp.defaultProps = { color: "red", animationTime: 500 };

export default Lamp;

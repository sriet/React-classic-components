import * as React from "react";
import PropTypes from "prop-types";

const ObliqueGauge = ({
  max,
  min,
  width,
  height,
  strokeValue,
  obliqueValue,
}) => {
  const strokeCircle = 120 - 81 * (strokeValue / (max - min));
  const obliqueCircle = 120 - 81 * (obliqueValue / (max - min));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="33%" y="39%" width="4" height="4" fill="#333" />
      <foreignObject
        className="gauge-font"
        x="42%"
        y="26.7%"
        width="260px"
        height="100px"
      >
        <p>1</p>
      </foreignObject>
      <rect
        x="33.8%"
        y="50.7%"
        width="3.5"
        height="3.5"
        fill="white"
        stroke="#333333"
        strokeWidth="0.7"
      />
      <foreignObject
        className="gauge-font"
        x="42.5%"
        y="38.7%"
        width="260px"
        height="100px"
      >
        <p>2</p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="33.5%"
        y="52.5%"
        width="260px"
        height="100px"
      >
        <p
          style={{
            background:
              "repeating-linear-gradient(45deg, #000000, #000000 0.1px, #ffffff 1px, #ffffff 1px)",
            width: "2px",
            border: "1px solid #333",
            height: "2px",
          }}
        ></p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="42.5%"
        y="49.4%"
        width="260px"
        height="100px"
      >
        <p>3</p>
      </foreignObject>

      <g filter="url(#filter0_d_711_531)">
        <circle cx="29.7727" cy="30.2273" r="19" className="circle-back" />
      </g>
      {/* <rect> */}
      <circle
        cx="29.7727"
        cy="30.2273"
        r="19"
        stroke="url(#vertical-stripe-2)"
        className="circle-oblique"
        strokeDashoffset={obliqueCircle}
      />
      {/* </rect> */}
      <defs>
        {" "}
        <pattern
          id="vertical-stripe-2"
          patternUnits="userSpaceOnUse"
          width="2"
          height="2"
        >
          {" "}
          <image
            xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8cmVjdCB4PScwJyB5PScwJyB3aWR0aD0nMicgaGVpZ2h0PScxMCcgZmlsbD0nYmxhY2snIC8+Cjwvc3ZnPg=="
            x="0"
            y="0"
            width="2"
            height="2"
          >
            {" "}
          </image>{" "}
        </pattern>{" "}
      </defs>
      <circle
        cx="29.7727"
        cy="30.2273"
        r="19"
        className="circle-front"
        strokeDashoffset={strokeCircle}
      />
      <defs>
        <filter id="filter0_d_711_531">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 7 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 3 0"
          />
        </filter>
      </defs>
    </svg>
  );
};

ObliqueGauge.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  strokeValue: PropTypes.number,
  obliqueValue: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ObliqueGauge;

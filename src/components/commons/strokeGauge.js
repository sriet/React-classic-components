import * as React from "react";
import PropTypes from "prop-types";

const StrokeGauge = ({ max, min, value, width, height }) => {
  const circle = 120 - 81 * (value / (max - min));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="33%" y="40%" width="4" height="4" fill="#333" />
      <foreignObject
        className="gauge-font"
        x="42%"
        y="28.7%"
        width="260px"
        height="100px"
      >
        <p>1</p>
      </foreignObject>
      <rect
        x="33.8%"
        y="52.7%"
        width="3.5"
        height="3.5"
        fill="white"
        stroke="#333333"
        strokeWidth="0.7"
      />
      <foreignObject
        className="gauge-font"
        x="42.5%"
        y="40.7%"
        width="260px"
        height="100px"
      >
        <p>2</p>
      </foreignObject>

      <g filter="url(#filter0_d_711_531)">
        <circle cx="29.7727" cy="30.2273" r="19" className="circle-back" />
      </g>
      <circle
        cx="29.7727"
        cy="30.2273"
        r="19"
        className="circle-front"
        strokeDashoffset={circle}
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

StrokeGauge.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default StrokeGauge;

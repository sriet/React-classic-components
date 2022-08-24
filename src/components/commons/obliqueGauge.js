import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  guage: {
    // height: "100vh",
  },
  symbol: {
    overflow: "visible",
  },
  area: {
    fill: "none",
    strokeWidth: "15",
  },
  stroke: {
    fill: "none",
    stroke: "#333",
    strokeWidth: "2",
    strokeLinejoin: "round",
  },
});

const ObliqueGauge = ({
  max,
  min,
  width,
  height,
  strokeValue,
  obliqueValue,
}) => {
  const classes = useStyles();

  return (
    <svg
      viewBox="-60 -60 120 120"
      className={classes.guage}
      width={width}
      height={height}
    >
      <symbol className={classes.symbol} id="limit">
        <path d="M 0,41 V 54" />
      </symbol>
      <pattern id="hatch" patternUnits="userSpaceOnUse" width="16" height="8">
        <path
          className={classes.stroke}
          d="M -2,-6 18,4 M -2,2 18,12 M -2,10 18,20"
        />
      </pattern>
      {/* data areas in reverse order  */}
      <path
        id="area-2"
        stroke="url(#hatch)"
        strokeDasharray={`calc(${obliqueValue / (max - min)} * 100px) 100px`}
        className={classes.area}
        d="M -33.588,33.587 A 47.5,47.5 0 1 1 33.588,33.588"
        pathLength="100"
      />
      <path
        id="area-1"
        stroke="#333"
        strokeDasharray={`calc(${strokeValue / (max - min)} * 100px) 100px`}
        className={classes.area}
        d="M -33.588,33.587 A 47.5,47.5 0 1 1 33.588,33.588"
        pathLength="100"
      />
      <rect x="-15%" y="-15%" width="10" height="10" fill="#333" />
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="-27.5%"
        width="260px"
        height="100px"
      >
        <p>1</p>
      </foreignObject>
      <rect
        x="-14%"
        y="0%"
        width="8"
        height="8"
        fill="white"
        stroke="#333"
        strokeWidth="2"
      />
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="-13.5%"
        width="260px"
        height="100px"
      >
        <p>2</p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="-15%"
        y="3%"
        width="30"
        height="30"
      >
        <p
          style={{
            background:
              "repeating-linear-gradient(232deg, #333, #333 0.3px, rgb(255, 255, 255) 3px, rgb(255, 255, 255) 1px)",
            width: "6px",
            border: "2px solid #333",
            height: "6px",
          }}
        ></p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="0.5%"
        width="260px"
        height="100px"
      >
        <p>3</p>
      </foreignObject>
      <g className={classes.stroke}>
        {/* static outer border  */}
        <path d="M -38.184,38.184 A 54,54 0 1 1 38.184,38.184 L 28.991,28.991 A 41,41 0 1 0 -28.991,28.991 Z" />
        {/* bisecting data lines, cited from a template  */}
        <use
          // transform={`rotate(calc(45deg + ${
          //   strokeValue / (max - min)
          // } * 270deg))`}
          href="#limit"
          style={{
            transform: `rotate(calc(45deg + ${
              strokeValue / (max - min)
            } * 270deg))`,
          }}
        />

        <use
          style={{
            transform: `rotate(calc(45deg + ${
              obliqueValue / (max - min)
            } * 270deg))`,
          }}
          href="#limit"
        />
      </g>
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

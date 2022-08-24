import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { dividerClasses, Switch } from "@mui/material";

const useStyles = makeStyles({
  value: {
    fontSize: "12px !important",
  },
  title: {
    fontSize: "12px !important",
    fontWeight: "900 !important",
    color: "#333",
  },
  progressBack: {
    position: "relative",
    overflowX: "clip",
    display: "block",
    zIndex: "0",
    backgroundColor: "white",
    width: "100%",
    height: "24px",
    borderLeft: "2px solid #333",
    borderRight: "2px solid #333",
    // border: "2px solid #333",
  },
  status: {
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    // backgroundColor: "#1976d2",
  },
  label: {
    // width: "100%",
    position: "absolute",
    top: "30px",
    fontSize: "12px",
    color: "#333",
  },
});

const ProgressBar = () => {
  const classes = useStyles();

  const progressData = {
    min: 0,
    max: 100,

    status: [
      {
        pattern: 0,
        value: 0,
        label: "Dim1",
      },
      {
        pattern: 1,
        value: 25,
        label: "Dim2",
      },
      {
        pattern: 2,
        value: 40,
        label: "Dim3",
      },
      {
        pattern: 5,
        value: 64,
      },
      {
        pattern: 3,
        value: 65,
        label: "Dim4",
      },
      {
        pattern: 4,
        value: 90,
        bg: "blue",
        label: "Dim5",
      },
    ],
  };

  const pattern = [
    "white",
    "repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 2px, #ffffff 10px)",
    "repeating-linear-gradient(135deg, #000000, #000000 1px, #ffffff 2px, #ffffff 5px)",
    "#333",
    "repeating-linear-gradient(135deg, #000000, #000000 1px, #ffffff 5px, #ffffff 5px)",
    "#fff",
  ];

  return (
    <div>
      <span
        role="progressbar"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
        className={classes.progressBack}
      >
        {progressData.status.map((item, index) => (
          <div key={index}>
            <span
              className={classes.status}
              style={{
                transform: `translateX(${
                  (item.value / (progressData.max - progressData.min)) * 100
                }%)`,
                background: `${pattern[item.pattern]}`,
                borderLeft: `${
                  progressData.max > progressData.min && item.value === 0
                    ? "none"
                    : "2px solid #333"
                }`,
                borderRight: `${
                  progressData.max < progressData.min && item.value == 0
                    ? "none"
                    : "2px solid #333"
                }`,
                transformOrigin: "left",
                borderTop: `${item.pattern !== 5 && "2px solid #333"}`,
                borderBottom: `${item.pattern !== 5 && "2px solid #333"}`,
              }}
            ></span>
            <span
              className={classes.label}
              style={{
                left: `${
                  progressData.max > progressData.min
                    ? (item.value / (progressData.max - progressData.min)) *
                        100 +
                      "%"
                    : ""
                }`,
                right: `${
                  progressData.max < progressData.min
                    ? Math.abs(
                        (item.value / (progressData.max - progressData.min)) *
                          100
                      ) + "%"
                    : ""
                }`,
              }}
            >
              {item.pattern !== 5 && item.value}
              <span style={{ marginLeft: "5px" }}>{item.label}</span>
            </span>
          </div>
        ))}
      </span>
    </div>
  );
};

ProgressBar.propTypes = {
  children: PropTypes.any,
};

export default ProgressBar;

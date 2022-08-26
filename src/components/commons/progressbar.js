import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
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
  },
  status: {
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
  },
  label: {
    position: "absolute",
    top: "30px",
    fontSize: "12px",
    color: "#333",
    fontWeight: "700",
  },
}));

const ProgressBar = (props) => {
  const classes = useStyles();

  const pattern = [
    "white",
    "repeating-linear-gradient(45deg, #333, #333 1px, #ffffff 2px, #ffffff 10px) 0% 0% / 28px",
    "repeating-linear-gradient(135deg, #333, #333 1px, #ffffff 2px, #ffffff 5px) 0% 0% / 21px",
    "#333",
    "repeating-linear-gradient(135deg, rgb(51, 51, 51), rgb(51, 51, 51) 4px, rgb(255, 255, 255) 4px, rgb(255, 255, 255) 6px) 0% 0% / 34px",
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
        {props.status.map((item, index) => (
          <div key={index}>
            <span
              className={classes.status}
              style={{
                transform: `translateX(${
                  (item.value / (props.max - props.min)) * 100
                }%)`,
                background: `${pattern[item.pattern]}`,
                borderLeft: `${
                  props.max > props.min && item.value === 0
                    ? "none"
                    : "2px solid #333"
                }`,
                borderRight: `${
                  props.max < props.min && item.value === 0
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
                  props.max > props.min
                    ? (item.value / (props.max - props.min)) * 100 + "%"
                    : ""
                }`,
                right: `${
                  props.max < props.min
                    ? Math.abs((item.value / (props.max - props.min)) * 100) +
                      "%"
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

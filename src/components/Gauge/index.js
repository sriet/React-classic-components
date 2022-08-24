import * as React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import StrokeGauge from "../commons/strokeGauge";
import ObliqueGauge from "../commons/obliqueGauge";

const Gauge = () => {
  const width = 170;
  const height = 170;
  const max = 100;
  const min = 0;
  const strokeValue = 42;
  const obliqueValue = 66;

  const BoxPanel = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    margin: theme.spacing(5),
    border: "1px solid #BDBDBD",
    borderRadius: "4px",
    padding: "12px 16px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    elevation: 0,
  }));

  return (
    <Container>
      <BoxPanel sx={{ flexGrow: 1, m: 5 }}>
        <StrokeGauge
          max={max}
          min={min}
          strokeValue={strokeValue}
          width={width}
          height={height}
        />
        <ObliqueGauge
          max={max}
          min={min}
          strokeValue={strokeValue}
          obliqueValue={obliqueValue}
          width={width}
          height={height}
        />
        <StrokeGauge
          max={max}
          min={min}
          strokeValue={75}
          width={width}
          height={height}
        />
      </BoxPanel>
    </Container>
  );
};

Gauge.propTypes = {
  children: PropTypes.any,
};

export default Gauge;

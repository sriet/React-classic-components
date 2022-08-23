import * as React from "react";
import PropTypes from "prop-types";
import { Container, Paper } from "@mui/material";

import StrokeGauge from "../commons/strokeGauge";
import ObliqueGauge from "../commons/obliqueGauge";

const Gauge = () => {
  const width = 170;
  const height = 170;
  const max = 100;
  const min = 0;
  const strokeValue = 55;
  const obliqueValue = 66;

  return (
    <Container>
      <Paper sx={{ flexGrow: 1, m: 5 }}>
        <StrokeGauge
          max={max}
          min={min}
          value={strokeValue}
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
          value={75}
          width={width}
          height={height}
        />
      </Paper>
    </Container>
  );
};

Gauge.propTypes = {
  children: PropTypes.any,
};

export default Gauge;

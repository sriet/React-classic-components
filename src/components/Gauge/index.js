import * as React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import StrokeGauge from "../commons/strokeGauge";
import ObliqueGauge from "../commons/obliqueGauge";
import { BoxPanel } from "../commons/styledComponents";

const Gauge = () => {
  const width = 170;
  const height = 170;
  const max = 100;
  const min = 0;
  const strokeValue = 42;
  const obliqueValue = 66;

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

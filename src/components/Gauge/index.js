import * as React from "react";
import PropTypes from "prop-types";
import { Box, Container, } from "@mui/material";

import StrokeGauge from "../commons/strokeGauge";
import ObliqueGauge from "../commons/obliqueGauge";
import { BoxPanel } from "../../style/styledComponents";

const Gauge = () => {
  const width = 170;
  const height = 170;
  const max = 100;
  const min = 0;
  const strokeValue = 42;
  const obliqueValue = 66;

  return (
    <Box>
      <StrokeGauge
        max={max}
        min={min}
        strokeValue={strokeValue}
        width={width}
        height={height}
        part1={'1'}
        part2={'2'}
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
        part1={'1'}
        part2={'2'}
      />
    </Box>
  );
};

Gauge.propTypes = {
  children: PropTypes.any,
};

export default Gauge;

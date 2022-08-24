import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";
import { BoxPanel } from "./../commons/styledComponents/index";

const useStyles = makeStyles({});

const BarChart = () => {
  const classes = useStyles();

  return (
    <Container>
      <BoxPanel width="50%" sx={{ border: 0 }}>
        iddld
      </BoxPanel>
    </Container>
  );
};

BarChart.propTypes = {};

export default BarChart;

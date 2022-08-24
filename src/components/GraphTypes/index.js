import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Container, Grid, Typography } from "@mui/material";

import { BoxPanel, TypoItem } from "../commons/styledComponents";
import ProgressBar from "./progressbar";

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
    overflow: "hidden",
    display: "block",
    zIndex: "0",
    backgroundColor: "white",
    height: "20px",
    border: "2px solid #333",
  },
  status1: {
    background:
      "repeating-linear-gradient(45deg, #000000, #000000 1px, #ffffff 1px, #ffffff 8px)",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
  status2: {
    background: "#333",
    width: "100%",
    position: "absolute",
    left: "0",
    bottom: "0",
    top: "0",
    transition: "transform .4s linear",
    transformOrigin: "left",
    // backgroundColor: "#1976d2",
  },
});

const GraphTypes = () => {
  const classes = useStyles();

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2">GraphTypes</TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3} md={3}>
                <Typography className={classes.title}>000,000,#</Typography>
                <Typography className={classes.value}>$[Value]</Typography>
              </Grid>
              <Grid item xs={9} md={9}>
                <ProgressBar />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

GraphTypes.propTypes = {
  children: PropTypes.any,
};

export default GraphTypes;

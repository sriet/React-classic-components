import * as React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  OutlinedInput,
  InputAdornment,
  Button,
} from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
  StockInput,
  StockSelect,
} from "../commons/styledComponents";

const useStyles = makeStyles({
  mt10: {
    marginTop: "10px",
  },
  relative: {
    position: "relative",
  },
  dateStyle: {
    position: "absolute !important",
    pointerEvents: "none",
    width: "92% !important",
    height: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& fieldset": { border: "1px solid transparent" },
  },
});

const GraphTypes = () => {
  const classes = useStyles();
  const [date, setDate] = React.useState(
    moment("2020-10-12").format("MM/DD/YY")
  );

  const inputTypeRef = React.useRef();
  const [inputType, setInputType] = React.useState("Type2");
  const showRefContent = () => {
    setInputType(inputTypeRef.current.value);
    console.log(inputTypeRef.current.value);
  };

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
                <PriceLabel xs={{ fontSize: "700" }}>000,000,#</PriceLabel>
                <Typography xs={{ fontSize: "12px" }}>h1. Heading</Typography>
                <PriceLabel>$[Value]</PriceLabel>
              </Grid>
              <Grid item xs={9} md={9}>
                <Grid container className={classes.mt10}>
                  <Grid item xs={12}>
                    <PriceLabel>Sale Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12} className={classes.relative}>
                    <StockInput
                      type="date"
                      value={date}
                      onChange={(e) =>
                        setDate(moment(e.target.value).format("MM/DD/YY"))
                      }
                    />
                    <StockInput
                      type="text"
                      className={classes.dateStyle}
                      value={date}
                    />
                  </Grid>
                </Grid>
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

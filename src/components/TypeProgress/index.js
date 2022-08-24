import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import moment from "moment";
import {
  Container,
  Grid,
  Divider,
  Link,
  OutlinedInput,
  Box,
} from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  PriceLabel,
  StockInput,
  StockSelect,
} from "../commons/styledComponents";
import ProgressBar from "../commons/progressbar";

const useStyles = makeStyles({
  mt10: {
    marginTop: "10px !important",
  },
  relative: {
    position: "relative",
  },
  dateStyle: {
    position: "absolute !important",
    pointerEvents: "none",
    width: "92% !important",
    height: "92%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& fieldset": { border: "1px solid transparent" },
  },
});

const TypeProgress = (props) => {
  
  const [date, setDate] = React.useState(
    moment(props.date).format("MM/DD/YY")
  );

  const classes = useStyles();

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={8}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>ID</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput defaultValue={props.id} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Type</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.type}
                    >
                      <option>Type1</option>
                      <option>Type2</option>
                      <option>Type3</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Date</PriceLabel>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.relative} ${classes.mt10} `}
                  >
                    <StockInput
                      type="date"
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
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={5} md={7}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Amount</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput type="number" 
                      defaultValue={props.amount}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={3}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Period</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.period}
                    >
                      <option>Selection #1</option>
                      <option>Selection #2</option>
                      <option>Selection #3</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Dropdown</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.dropdown}
                    >
                      <option>None</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ mt: "16px" }} />
          </Grid>
          <Grid item xs={12}>
            <ProgressBar {...props.data} />
            </Grid>
          <Grid item xs={12}>
            <Grid container pt="16px">
              <Box  flexGrow='1'></Box>
              <Link
                sx={{
                  color: "gray",
                  cursor: "pointer",
                  pr: "16px",
                  textDecorationColor: "gray",
                }}
              >
                Cancel
              </Link>
              <Link sx={{ cursor: "pointer" }}>Save</Link>
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

TypeProgress.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default TypeProgress;

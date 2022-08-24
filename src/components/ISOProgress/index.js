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
  InputAdornment,
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

const ISOProgress = (props) => {
  const [expiryDate, setExpiryDate] = React.useState(
    moment(props.expiryDate).format("MM/DD/YY")
  );
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
              <Grid item xs={12} md={7.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>ID</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput defaultValue={props.id} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
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
                      <option>ISO</option>
                      <option>ISOa</option>
                      <option>ISOb</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Price</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      defaultValue={props.price}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
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
              <Grid item xs={7} md={4.8}>
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
              <Grid item xs={5} md={1.5}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Expiry Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12} className={`${classes.relative} ${classes.mt10} `}>
                    <StockInput
                      type="date"
                      onChange={(e) =>
                        setExpiryDate(moment(e.target.value).format("MM/DD/YY"))
                      }
                    />
                    <StockInput
                      type="text"
                      className={classes.dateStyle}
                      value={expiryDate}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Duration</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.duration}
                    >
                      <option>123</option>
                      <option>124</option>
                      <option>125</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
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
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Yes/No</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.yn}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Dropdown #2</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      defaultValue={props.dropdown2}
                    >
                      <option>Yes</option>
                      <option>No</option>
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

ISOProgress.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default ISOProgress;

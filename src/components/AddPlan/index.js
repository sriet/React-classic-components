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
} from "@mui/material";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  PriceLabel,
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
    height: "92%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& fieldset": { border: "1px solid transparent" },
  },
});

const AddPlan = (props) => {
  const [expiryDate, setExpiryDate] = React.useState(
    moment("2020-10-12").format("MM/DD/YY")
  );
  const [date, setDate] = React.useState(
    moment("2020-10-12").format("MM/DD/YY")
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
                <Grid container className={classes.mt10}>
                  <Grid item xs={12}>
                    <PriceLabel>Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12} className={classes.relative}>
                    <StockInput
                      type="date"
                      // value={date}
                      onChange={(e) =>
                        setDate(moment(e.target.value).format("MM/DD/YY"))
                      }
                    />
                    <StockInput
                      type="text"
                      className={classes.dateStyle}
                      // value={date}
                      defaultValue={props.date}
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
                    <StockInput type="number" placeholder="6728" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} md={1.5}>
                <Grid container className={classes.mt10}>
                  <Grid item xs={12}>
                    <PriceLabel>Expiry Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12} className={classes.relative}>
                    <StockInput
                      type="date"
                      value={expiryDate}
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
                    >
                      <option>48mo</option>
                      <option>60mo</option>
                      <option>72mo</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Amount</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                    >
                      <option>12mo</option>
                      <option>6mo</option>
                      <option>3mo</option>
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
                    <PriceLabel>Extended?</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                    >
                      <option>Yes</option>
                      <option>No</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: "16px" }} />
          </Grid>
          <Grid item xs={12}>
            <Grid container pb="12px">
              <Link
                sx={{
                  color: "red",
                  flexGrow: 1,
                  cursor: "pointer",
                  textDecorationColor: "red",
                }}
              >
                Delete
              </Link>
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

AddPlan.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default AddPlan;

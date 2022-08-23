import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import moment from "moment";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Link,
  OutlinedInput,
  NativeSelect,
  InputAdornment,
  Box,
} from "@mui/material";

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
const TypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1, 0),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "bold",
}));
const PriceLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0, 0),
  textAlign: "left",
  color: theme.palette.text.secondary,
  fontWeight: "light",
  fontSize: "12px",
}));
const StockInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  fontSize: "16px",
  width: "100%",
  "> input": {
    padding: "6px 8px 6px 8px",
  },
}));
const StockSelect = styled(NativeSelect)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  width: "100%",
  fontSize: "16px",
  "> select": {
    padding: "6px 8px 6px 8px",
  },
}));

const StockPlan = () => {
  const NewIcon = (props) => (
    <svg
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", right: "12px" }}
    >
      <path
        d="M1 1.5L5 5.5L9 1.5"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Add Plan
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={7.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>ID</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput placeholder="Placeholder" />
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
                      IconComponent={NewIcon}
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
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput type="date" />
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
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Expiry Date</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput
                      type="date"
                      defaultValue={moment("2019-08-10").format("MM/DD/YY")}
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
                      IconComponent={NewIcon}
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
                      IconComponent={NewIcon}
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
                      IconComponent={NewIcon}
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
                      IconComponent={NewIcon}
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
              <Link sx={{ flexGrow: 1, cursor: "pointer" }}>Delete</Link>
              <Link sx={{ color: "gray", cursor: "pointer", pr: "16px" }}>
                Cancel
              </Link>
              <Link sx={{ color: "red", cursor: "pointer" }}>Save</Link>
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

StockPlan.propTypes = {
  children: PropTypes.any,
};

export default StockPlan;

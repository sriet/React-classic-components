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

const Last = () => {
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
            <TypoItem variant="subtitle2">Last</TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={4} md={2}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Employer</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                    >
                      <option>Employer</option>
                      <option>Employer</option>
                      <option>Employer</option>
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
                    >
                      <option>12345</option>
                      <option>123456</option>
                      <option>1234567</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} md={4}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>ID</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput value="12" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Sale</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      IconComponent={SelectIcon}
                      inputRef={inputTypeRef}
                      input={<OutlinedInput />}
                      onChange={showRefContent}
                    >
                      <option>Type2</option>
                      <option>Start #1</option>
                      <option>Type4</option>
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel>Sale Price</PriceLabel>
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
            <Divider sx={{ my: "16px" }} />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Summary 1</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$2,154</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Summary 2</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$781</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container spacing="4px">
                  <Grid item xs={12}>
                    <PriceLabel>Summary 3</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <PriceValue>$28,452</PriceValue>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ mt: "16px" }} />
          </Grid>

          <Grid item xs={12}>
            <Grid container pb="12px" sx={{ alignItems: "center" }}>
              <Link
                sx={{
                  flexGrow: 1,
                  color: "red",
                  cursor: "pointer",
                  textDecorationColor: "red",
                }}
              >
                Delete Sale
              </Link>
              <Button
                sx={{
                  border: "1px solid gray",
                  borderRadius: "4px",
                  color: "gray",
                  mr: "12px",
                  textTransform: "none",
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  borderRadius: "4px",
                  color: "white",
                  bgcolor: "#2F80ED",
                  textTransform: "none",
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </BoxPanel>
    </Container>
  );
};

Last.propTypes = {
  children: PropTypes.any,
};

export default Last;

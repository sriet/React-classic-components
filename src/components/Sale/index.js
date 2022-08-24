import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  OutlinedInput,
  InputAdornment,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  Button,
} from "@mui/material";
import moment from "moment";

import { SelectIcon } from "../commons/icon/multipleIcons";
import {
  BoxPanel,
  TypoItem,
  PriceLabel,
  PriceValue,
  StockTableInput,
  StockInput,
  StockSelect,
} from "../commons/styledComponents";

//styles
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

const Sale = ( props ) => {
  const inputTypeRef = React.useRef();
  const [inputType, setInputType] = React.useState("Type2");
  const showRefContent = () => {
    setInputType(inputTypeRef.current.value);
  };

  const classes = useStyles();
  const [date, setDate] = React.useState(
    moment("2020-10-12").format("MM/DD/YY")
  );
  const getSumByKey = (arr, key) => {
    return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
  }

  return (
    <Container>
      <BoxPanel>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2">Sale</TypoItem>
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
                      defaultValue={props.employer}
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
                      defaultValue={props.dropdown}
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
                    <PriceLabel>Sold</PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockInput defaultValue={props.sold} />
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
                      defaultValue={props.sale}
                    >
                      <option>Type2</option>
                      <option>Start #1</option>
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
                        defaultValue={props.salePrice}
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
                        // value={date}
                        defaultValue={props.saleDate}
                        />
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: "16px" }} />
          </Grid>

          <Grid item xs={12} display={inputType === "Type2" ? "block" : "none"}>
            <Grid container spacing={2}>
                <Table sx={{ marginLeft: 2 }}>
                    <TableHead>
                        <TableRow
                            sx={{ "> th, td": { color: "#828282", py: "8px" } }}
                        >
                            <TableCell width="5%">Id</TableCell>
                            <TableCell width="15%" align="right">
                            Date
                            </TableCell>
                            <TableCell width="15%" align="right">
                            Total
                            </TableCell>
                            <TableCell width="20%" align="right">
                            Amount
                            </TableCell>
                            <TableCell width="45%" align="right">
                            Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={{
                            "&:last-child td, &:last-child th": {
                            border: 0,
                            pt: "8px",
                            pb: "0px",
                            },
                        }}
                    >
                        {props.table.map((row, index)=>(
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                {row.id}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right">
                                    <StockTableInput defaultValue={row.amount} />
                                </TableCell>
                                <TableCell align="right">${row.value.toLocaleString('en-US')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
              <Grid item xs={12}>
                <Grid container px={2}>
                  <Typography fontSize="14px" sx={{ flexGrow: 1 }}>
                    <b>Total</b>
                  </Typography>
                  <Typography fontSize="14px" width="50%" align="right">
                    <b>${getSumByKey(props.table, 'value').toLocaleString('en-US')}</b>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: "16px" }} />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={2}>
                {props.summary.map((item, index)=>(
                <Grid item xs={3} key={index}>
                    <Grid container spacing="4px">
                    <Grid item xs={12}>
                        <PriceLabel>Summary {index + 1}</PriceLabel>
                    </Grid>
                    <Grid item xs={12}>
                        <PriceValue>${item.toLocaleString('en-US')}</PriceValue>
                    </Grid>
                    </Grid>
                </Grid>
                ))}
            </Grid>
            <Divider sx={{ mt: "16px" }} />
          </Grid>

          <Grid item xs={12}>
            <Grid container pb="12px" sx={{ alignItems: "center" }}>
              <Link
                sx={{
                  flexGrow: 1,
                  color: "red",
                  textDecorationColor: "red",
                  cursor: "pointer",
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
                variant="contained"
                color="primary"
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

Sale.propTypes = {
  children: PropTypes.any,
};

export default Sale;

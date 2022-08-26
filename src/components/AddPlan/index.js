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
  TextField,
} from "@mui/material";
import { SelectIcon } from "../commons/icon/multipleIcons";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  BoxPanel,
  PriceLabel,
  StockInput,
  StockSelect,
} from "../commons/styledComponents";
import { NumberFormatCustom } from "../commons/styledComponents";

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
  numberInput: {
    width:'100%',
    "& input": { padding:'6px 8px' },
  },
});


const AddPlan = (props) => {
  
  const classes = useStyles();

  // Date value State
  const [expiryDate, setExpiryDate] = React.useState(
    moment(props.expiryDate).format("MM/DD/YY")
  );
  const [date, setDate] = React.useState(moment(props.date).format("MM/DD/YY"));

  // Amount1 value State
  const [values, setValues] = React.useState({
    id: props.id,
    type: props.type.default,
    price: props.price,
    duration: props.duration.default,
    amount2: props.amount2.default,
    yn: props.yn.default,
    extended: props.extended.default,
    amount1: props.amount1,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log('pppp', values)
  };


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
                    <StockInput 
                      value={values.id}
                      name='id'
                      onChange={handleChange}
                    />
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
                      value={values.type}
                      name='type'
                      onChange={handleChange}
                    >
                      {props.type.options.map((item, index)=>(
                        <option key={index}>{item}</option>
                      ))}
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
                      value={values.price}
                      name='price'
                      onChange={handleChange}
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
                  <Grid container item xs={12}>
                    <TextField 
                    className={classes.numberInput}
                    variant="outlined" 
                    value={values.amount1}
                    onChange={handleChange}
                    name="amount1"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }} />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} md={1.5}>
                <Grid container>
                  <Grid item xs={12}>
                    <PriceLabel>Expiry Date</PriceLabel>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={`${classes.relative} ${classes.mt10} `}
                  >
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
                      value={values.duration}
                      name='duration'
                      onChange={handleChange}
                    >
                      {props.duration.options.map((item, index)=>(
                        <option key={index}>{item}</option>
                      ))}
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
                      value={values.amount2}
                      name='amount2'
                      onChange={handleChange}
                    >
                    {props.amount2.options.map((item, index)=>(
                      <option key={index}>{item}</option>
                    ))}
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
                      value={values.yn}
                      name='yn'
                      onChange={handleChange}
                    >
                    {props.yn.options.map((item, index)=>(
                      <option key={index}>{item}</option>
                    ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3} md={1.5}>
                <Grid container spacing="10px">
                  <Grid item xs={12}>
                    <PriceLabel className="align-items-start" >Extended? &nbsp; <InfoOutlinedIcon className="font-16" /></PriceLabel>
                  </Grid>
                  <Grid item xs={12}>
                    <StockSelect
                      input={<OutlinedInput />}
                      IconComponent={SelectIcon}
                      value={values.extented}
                      name='extended'
                      onChange={handleChange}
                    >
                    {props.extended.options.map((item, index)=>(
                      <option key={index}>{item}</option>
                    ))}
                    </StockSelect>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
              <Divider />
          </Grid>
          <Grid item xs={12}>
            <Grid container pb="12px">
              <Link flexGrow='1' color={'#EB5757'} className="text-decoration-red cursor">
                Delete
              </Link>
              <Link color={'#828282'} pr= "16px" className="text-decoration-gray cursor"
              >
                Cancel
              </Link>
              <Link className="cursor">Save</Link>
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

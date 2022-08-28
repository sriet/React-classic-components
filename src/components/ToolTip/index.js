import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import {
  GrayBoxPanel,
} from "../commons/styledComponents";

//styles
const useStyles = makeStyles({
  marker: {
    position:'absolute', 
    width:'22.4px', 
    height:'22.4px', 
    backgroundColor:'#E0E0E0', 
    top:"0px", 
    left:"50%", 
    transform:'translate(-50%, -50%) rotate(-45deg)'
  },
});
const ToolTip = (props) => {
  
  const classes = useStyles();

  const getSumByKey = (arr, key) => {
    return arr.reduce((accumulator, current) => accumulator + Number(current[key]), 0)
  }

  return (
    <Container>
      <GrayBoxPanel width='181px' position='relative' color='#000000 !important' px='12px !important'>
      <div className={classes.marker}></div>
        <Grid container spacing='4px'>
          {props.data.map((item, index)=>(
            <Grid item xs={12} key={index}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography fontSize='12px'>{item.item}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography fontSize='12px' textAlign='right'>{item.value.toLocaleString('en-US')}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={6}>
                <Typography fontWeight='bold' fontSize='12px'>Total</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight='bold' fontSize='12px' textAlign='right'>{getSumByKey(props.data, 'value').toLocaleString('en-US')}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </GrayBoxPanel>
    </Container>
  );
};

ToolTip.propTypes = {
  children: PropTypes.any,
};

export default ToolTip;

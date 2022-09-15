import * as React from "react";
import PropTypes from "prop-types";
import {
  Grid,
} from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {
  BoxPanel,
  PriceLabel,
  PriceValue,
} from "../commons/styledComponents";
import PriceBar from "../commons/priceBar";

const PriceProgress = (props) => {

  return (
    <BoxPanel sx={{border:'none', padding:0}}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <PriceLabel>Title </PriceLabel>
        </Grid>
        <Grid py="4px" className="align-items-center" item xs={12}>
          <PriceValue pr='5.5px' sx={{color:(props.price<0 && '#EB5757')}}>{((props.price<0 && '-')||'')+`$`+Math.abs(props.price).toLocaleString('en-US')}</PriceValue>
          { 
            (props.price<0 &&
              <InfoOutlinedIcon className="font-18" />)
          }
        </Grid>
      </Grid>
      <Grid item xs={12} pt="12px">
        <PriceBar {...{ percent:(props.price / props.totalPrice * 100), color:(props.price<0 && '#EB5757')||'#000'}} />
      </Grid>
      <Grid item xs={12} pt="12px">
        <PriceLabel sx={{textAlign:'right'}}>Total ${props.totalPrice.toLocaleString('en-US')}</PriceLabel>
      </Grid>
    </BoxPanel>
  );
};

PriceProgress.propTypes = {
  children: PropTypes.any,
};

export default PriceProgress;

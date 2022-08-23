import * as React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  OutlinedInput,
  InputAdornment,
 } from '@mui/material';
import { SelectIcon } from "../commons/icon/multipleIcons"
import { GrayBoxPanel, TypoItem, PriceLabel, StockInput, StockSelect } from '../commons/styledComponents';


const Detail = () => {
    
  return (
    <Container>
      <GrayBoxPanel>
        <Grid container spacing='8px'>
            <Grid item xs={12}>
                <TypoItem variant="subtitle2" gutterBottom>
                Detail
                </TypoItem>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid container spacing='10px'>
                            <Grid item xs={12}>
                                <PriceLabel>Instance Name</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockInput placeholder='Employer' />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5} md={2.5}>
                        <Grid container spacing='10px'>
                            <Grid item xs={12}>
                                <PriceLabel>User</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockSelect
                                    input={<OutlinedInput/>}
                                    IconComponent={SelectIcon}
                                >
                                    <option >Jenny Thompson</option>
                                    <option >Jenny</option>
                                    <option >Jenny</option>
                                </StockSelect>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <Grid container spacing='10px'>
                            <Grid item xs={12}>
                                <PriceLabel>Company</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockSelect
                                    input={<OutlinedInput/>}
                                    IconComponent={SelectIcon}
                                >
                                    <option >Employer</option>
                                    <option >Jenny</option>
                                    <option >Jenny</option>
                                </StockSelect>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} md={1.5}>
                        <Grid container spacing='10px'>
                            <Grid item xs={12}>
                                <PriceLabel>Current Price</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockInput 
                                startAdornment={<InputAdornment position="start">$</InputAdornment>} 
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </GrayBoxPanel>
    </Container>
  );
}

Detail.propTypes = {
  children: PropTypes.any
}

export default Detail;
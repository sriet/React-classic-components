import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  Typography,
  OutlinedInput,
  NativeSelect,
  InputAdornment,
  Box,
 } from '@mui/material';

const BoxPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
  ...theme.typography.body2,
  margin: theme.spacing(3),  
  borderRadius:'4px',
  padding:'16px 35px',
  textAlign: 'left',
  color: theme.palette.text.secondary,
  elevation: 0
}));
const TypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
  ...theme.typography.body2,
  fontSize:"20px",
  padding: theme.spacing(0, 0),
  textAlign: 'left',
  color: theme.palette.mode === 'dark' ? '#fff' : '#000',
  fontWeight: 'bold'
}));
const PriceLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#E0E0E0',
  ...theme.typography.body2,
  padding: theme.spacing(0, 0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'light',
  fontSize: '12px'
}));
const StockInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  fontSize:'16px',
  width:'100%',
  "> input": {
    padding: '6px 8px 6px 8px',
  }
}));
const StockSelect = styled(NativeSelect)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  width:'100%',
  fontSize:'16px',
  "> select": {
    padding: '6px 8px 6px 8px',
  }
}));

const StockPlan = () => {
    
  return (
    <Container>
      <BoxPanel>
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
      </BoxPanel>
    </Container>
  );
}

StockPlan.propTypes = {
  children: PropTypes.any
}

export default StockPlan;
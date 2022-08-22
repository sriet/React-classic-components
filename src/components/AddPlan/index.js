import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
  Link,
  Input,
  OutlinedInput,
  Select,
  MenuItem,
  NativeSelect,
  InputAdornment
 } from '@mui/material';
 import EastIcon from '@mui/icons-material/East';
 import RefreshIcon from '@mui/icons-material/Refresh';
 import ProgressBar from '../commons/progressbar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  elevation: 0
}));
const TypoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1, 2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold'
}));
const PriceLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 0),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'light',
  fontSize: '12px'
}));
const PriceValue = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 1, 2, 2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  fontSize: '20px'
}));
const IsoItem = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
  fontSize: '12px',
  display: 'flex', 
  alignItems: 'center'
}));
const IsoPrice = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'light',
  fontSize: '12px'
}));
const ArrowItem = styled(EastIcon)(({ theme }) => ({
  fontSize: '15px'
}));
const BottomLabel = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 0, 0, 2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  fontWeight: 'light',
  fontSize: '12px',
  display: 'inline-block',
}));
const BtnDetail = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0, 2, 0, 2),
  textAlign: 'right',
  color: theme.palette.text.primary,
  fontWeight: 'light',
  fontSize: '12px',
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
      <Paper sx={{ flexGrow: 1, m: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypoItem variant="subtitle2" gutterBottom>
              Add Plan
            </TypoItem>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={0}>
                <Grid item xs minWidth='200px'>
                    <Grid container spacing={2} px={2}>
                        <Grid item xs={12}>
                            <PriceLabel>ID</PriceLabel>
                        </Grid>
                        <Grid item xs={12}>
                            <StockInput placeholder='Placeholder' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs container sx={{
                    minWidth:'300px'
                }}>
                    <Grid item xs={4}>
                        <Grid container spacing={2} px={2}>
                            <Grid item xs={12}>
                                <PriceLabel>Type</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockSelect
                                    input={<OutlinedInput/>}
                                >
                                    <option >ISO</option>
                                    <option >ISOa</option>
                                    <option >ISOb</option>
                                </StockSelect>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} minWidth='67px'>
                        <Grid container spacing={2} px={2}>
                            <Grid item xs={12}>
                                <PriceLabel>Price</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockInput 
                                startAdornment={<InputAdornment position="start">$</InputAdornment>} 
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} minWidth='67px'>
                        <Grid container spacing={2} px={2}>
                            <Grid item xs={12}>
                                <PriceLabel>Date</PriceLabel>
                            </Grid>
                            <Grid item xs={12}>
                                <StockInput type='date' />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant='middle' />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

StockPlan.propTypes = {
  children: PropTypes.any
}

export default StockPlan;